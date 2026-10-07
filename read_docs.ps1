Add-Type -AssemblyName System.IO.Compression.FileSystem

function Read-DocxText($docxPath) {
    Write-Host "`n=================================================="
    Write-Host "FULL DUMP: $docxPath"
    Write-Host "=================================================="
    try {
        $tempFile = [System.IO.Path]::GetTempFileName() + ".docx"
        Copy-Item -Path $docxPath -Destination $tempFile -Force
        $archive = [System.IO.Compression.ZipFile]::OpenRead($tempFile)
        $entry = $archive.GetEntry("word/document.xml")
        if ($entry) {
            $stream = $entry.Open()
            $reader = New-Object System.IO.StreamReader($stream)
            $xmlContent = $reader.ReadToEnd()
            $reader.Close()
            $stream.Close()
            
            $xmlContent = $xmlContent -replace '</w:p>', "`n[P_END]`n"
            $xmlContent = $xmlContent -replace '<[^>]+>', ''
            $lines = $xmlContent -split '\[P_END\]'
            foreach ($line in $lines) {
                $clean = [System.Net.WebUtility]::HtmlDecode($line.Trim())
                if ($clean.Length -gt 0) {
                    Write-Host $clean
                }
            }
        }
        $archive.Dispose()
        Remove-Item -Force $tempFile -ErrorAction SilentlyContinue
    } catch {
        Write-Host "ERROR reading $docxPath : $_"
    }
}

Read-DocxText "satyachandra resume-docx.docx"
