Add-Type -AssemblyName System.Drawing

function Optimize-Folder {
    param(
        [string]$inputDir,
        [string]$thumbDir,
        [int]$maxMainDim = 1920,
        [int]$maxThumbDim = 320
    )

    if (-not (Test-Path $thumbDir)) {
        New-Item -ItemType Directory -Path $thumbDir -Force | Out-Null
    }

    $files = Get-ChildItem -Path "$inputDir\*" -File | Where-Object { $_.Extension -match "^\.(jpg|jpeg|png)$" }

    foreach ($file in $files) {
        if ($file.Name.StartsWith("opt_")) { continue }
        Write-Host "Processing: $($file.Name) (Original: $([math]::Round($file.Length/1MB, 2)) MB)"
        
        try {
            $img = [System.Drawing.Image]::FromFile($file.FullName)
            $isPng = $file.Extension -eq ".png"

            # 1. Thumbnail
            $thumbPath = Join-Path $thumbDir $file.Name
            Save-ResizedImage -image $img -outputPath $thumbPath -maxDimension $maxThumbDim -isPng $isPng -quality 75

            # 2. Main
            $tempPath = Join-Path $inputDir ("opt_" + $file.Name)
            Save-ResizedImage -image $img -outputPath $tempPath -maxDimension $maxMainDim -isPng $isPng -quality 82

            $img.Dispose()

            Remove-Item $file.FullName -Force
            Rename-Item $tempPath -NewName $file.Name -Force

            $newFile = Get-Item (Join-Path $inputDir $file.Name)
            $newThumb = Get-Item $thumbPath
            Write-Host " -> Main: $([math]::Round($newFile.Length/1KB, 1)) KB | Thumb: $([math]::Round($newThumb.Length/1KB, 1)) KB"
        } catch {
            Write-Host " Error: $_"
        }
    }
}

function Save-ResizedImage {
    param(
        [System.Drawing.Image]$image,
        [string]$outputPath,
        [int]$maxDimension,
        [bool]$isPng,
        [long]$quality
    )

    $origW = $image.Width
    $origH = $image.Height

    if ($origW -gt $maxDimension -or $origH -gt $maxDimension) {
        if ($origW -ge $origH) {
            $newW = $maxDimension
            $newH = [int]($origH * ($maxDimension / $origW))
        } else {
            $newH = $maxDimension
            $newW = [int]($origW * ($maxDimension / $origH))
        }
    } else {
        $newW = $origW
        $newH = $origH
    }

    $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $g.DrawImage($image, 0, 0, $newW, $newH)

    if ($isPng) {
        $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    } else {
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $quality)
        $bmp.Save($outputPath, $codec, $encoderParams)
    }

    $g.Dispose()
    $bmp.Dispose()
}

Optimize-Folder -inputDir "public/graphic-design" -thumbDir "public/graphic-design/thumbs"
Optimize-Folder -inputDir "public/logos" -thumbDir "public/logos/thumbs" -maxMainDim 1200 -maxThumbDim 300

Write-Host "All folders optimized!"
