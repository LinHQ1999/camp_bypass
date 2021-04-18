package main

import (
	"embed"
	"net/http"

	"github.com/gin-gonic/gin"
)

var (
	//go:embed statics/*
	res embed.FS
)

func main() {
	g := gin.Default()

	/*ng build --base-href="/app/statics/"  --prod*/
	g.StaticFS("/app", http.FS(res))

	g.Any("/", func(c *gin.Context) {
		c.FileFromFS("statics/index.htm", http.FS(res))
	})

	g.GET("/linhq/users", func(ctx *gin.Context) {
		ctx.Header("Access-Control-Allow-Origin", "*")
		ctx.Header("Content-Type", "application/json")
		ctx.File("users.json")
	})

	g.NoRoute(func(c *gin.Context) {
		c.FileFromFS("statics/index.htm", http.FS(res))
	})

	if err := g.Run(":9080"); err != nil {
		panic(err.Error())
	}
}
