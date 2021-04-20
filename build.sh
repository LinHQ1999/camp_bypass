if [[ -d dist ]];then
    rm -rf dist
fi
mkdir dist

echo "正编译前端 。。。"
ng build --base-href /app/statics/ --prod

cd backend
    echo "正编译后端 。。。"
    GOOS=windows GOARCH=amd64 go build -o fuckcamp.exe
    mv fuckcamp.exe ../dist
    cp users.json ../dist
    rm -rf statics/*
cd ..
