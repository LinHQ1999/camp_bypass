# 0 is the first user arg
if (Test-Path dist){
    Remove-Item -Recurse -Force dist/*
}

$out
switch ($args[0]) {
    'l64' {
        go env -w GOOS=linux
        $out = "fuckcamp_linux_amd64"
    }
    'lrpi' {
        go env -w GOOS=linux GOARCH=arm64
        $out = "fuckcamp_linux_aarch"
    }
    Default {
        go env -w GOOS=windows
        $out = "fuckcamp_windows_x64.exe"
    }
}

Write-Output "开始编译: $out"
Write-Output "[编译前端]"
ng build --base-href /app/statics/ --prod
Set-Location backend
Write-Output "[编译后端：切入 backend]"
go build -o $out
Write-Output "[编译完成]"
Write-Output "[拷贝资源]"
Move-Item -Force $out ..\dist
Copy-Item users.json ..\dist

Write-Output "[开始清理：切出]"
Remove-Item -Force -Recurse statics\* 
Set-Location ..
# 还原编译环境
go env -w GOOS=windows GOARCH=amd64
Write-Output "[操作成功完成！]"
