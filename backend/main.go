package main

import (
	"embed"
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
)

var (
	//go:embed statics/*
	res embed.FS
)

func init() {
	gin.SetMode(gin.ReleaseMode)
}

func main() {
	g := gin.Default()
	/*ng build --base-href="/app/statics/"  --prod*/
	g.StaticFS("/app", http.FS(res))

	// fallback
	g.NoRoute(func(c *gin.Context) {
		c.FileFromFS("statics/index.htm", http.FS(res))
	})

	g.GET("/linhq/users", func(ctx *gin.Context) {
		ctx.Header("Access-Control-Allow-Origin", "*")
		ctx.Header("Content-Type", "application/json")
		ctx.File("users.json")
	})

	//if err := g.Run(":9080"); err != nil {
	//	panic(err.Error())
	//}
	tryTlsServe(g, ":9080")
}

func tryTlsServe(g *gin.Engine, addr string) {
	cert, key := "", ""
	dir, err := os.ReadDir(".")
	if err != nil {
		panic("错误的部署路径！" + err.Error())
	}
	for _, v := range dir {
		name := v.Name()
		if strings.Contains(name, "pem") {
			cert = name
		} else if strings.Contains(name, "key") {
			key = name
		}
	}
	if cert != "" && key != "" {
		if err := g.RunTLS(addr, cert, key); err != nil {
			panic(err)
		}
	} else {
		if err := g.Run(addr); err != nil {
			panic(err)
		}
	}
}
