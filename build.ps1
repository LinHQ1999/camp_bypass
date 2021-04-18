if (Test-Path dist){
    Remove-Item dist
}
mkdir dist
Write-Output "正编译前端 。。。"
ng build --base-href /app/statics/ --prod
Set-Location backend
Write-Output "正编译后端 。。。"
go build -o fuckcamp.exe
Move-Item fuckcamp.exe ../dist
Copy-Item users.json ../dist
Remove-Item -force statics/*
Set-Location ..
