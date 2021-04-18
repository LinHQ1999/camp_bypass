mkdir dist
ng build --base-href /app/statics/ --prod
Set-Location backend
Write-Output
go build -o fuckcamp.exe
Move-Item fuckcamp.exe ../dist
Copy-Item users.json ../dist
Remove-Item -force statics/*
Set-Location ..
