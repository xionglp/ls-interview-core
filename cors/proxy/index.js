const express = require("express")
const { createProxyMiddleware }  = require("http-proxy-middleware")

const app = express()

app.use(express.static("./static"))

app.use('/api', createProxyMiddleware({
  target: "http://localhost:8000",
  pathRewrite: {
    '^/api': ""
  }
}))

app.listen(3000, () => {
  console.log("proxy代理服务器开启成功, 监听3000端口")
})