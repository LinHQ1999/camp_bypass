mkdir dist
ng build --base-href /app/statics/ --prod
cd backend
go build -o fuckcamp.exe
mv fuckcamp.exe ../dist
rm -force statics
cd ..
