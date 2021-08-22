npm run build
git add .
git commit -a -m $(Get-Date -Format 'yyyy-MM-dd hh:mm')
git push hub gh-pages
Write-Output "部署完成!"
