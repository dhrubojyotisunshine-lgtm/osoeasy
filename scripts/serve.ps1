param([int]$Port = 4173)

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$webRoot = Join-Path $projectRoot 'dist'

if (-not (Test-Path -LiteralPath (Join-Path $webRoot 'index.html'))) {
    & (Join-Path $PSScriptRoot 'build.ps1')
}

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Output "OsoEasy is running at http://localhost:$Port/"

$mimeTypes = @{ '.html'='text/html; charset=utf-8'; '.css'='text/css; charset=utf-8'; '.js'='text/javascript; charset=utf-8'; '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.webp'='image/webp'; '.svg'='image/svg+xml' }

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $relativePath = $context.Request.Url.AbsolutePath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($relativePath)) { $relativePath = 'index.html' }
        $candidate = [IO.Path]::GetFullPath((Join-Path $webRoot $relativePath))
        if (-not $candidate.StartsWith([IO.Path]::GetFullPath($webRoot), [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $candidate -PathType Leaf)) {
            $context.Response.StatusCode = 404
            $bytes = [Text.Encoding]::UTF8.GetBytes('Not found')
        } else {
            $extension = [IO.Path]::GetExtension($candidate).ToLowerInvariant()
            $context.Response.ContentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { 'application/octet-stream' }
            $bytes = [IO.File]::ReadAllBytes($candidate)
        }
        $context.Response.ContentLength64 = $bytes.Length
        $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
        $context.Response.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
