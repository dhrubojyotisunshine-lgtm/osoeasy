$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$outputPath = Join-Path $projectRoot 'dist'

if (Test-Path -LiteralPath $outputPath) {
    Remove-Item -LiteralPath $outputPath -Recurse -Force
}

New-Item -ItemType Directory -Path $outputPath | Out-Null
Get-ChildItem -LiteralPath $projectRoot -File | Where-Object { $_.Extension -in @('.html', '.css', '.js') } | Copy-Item -Destination $outputPath
Copy-Item -LiteralPath (Join-Path $projectRoot 'assets') -Destination $outputPath -Recurse

$required = @('index.html', 'features.html', 'pricing.html', 'contact.html', 'styles.css', 'pages.css', 'app.js', 'components.js', 'pages.js', 'assets\laundry-platform-hero.png', 'assets\moorezy-logo.png', 'assets\feature-card-atlas.png')
foreach ($item in $required) {
    if (-not (Test-Path -LiteralPath (Join-Path $outputPath $item))) {
        throw "Build verification failed: missing $item"
    }
}

Write-Output "Build complete: $outputPath"
