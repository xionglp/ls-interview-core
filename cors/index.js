const Koa = require('koa')
const KoaRouter = require('@koa/router')
const static = require('koa-static')

const app = new Koa()
app.use(static('./static'))

// app.use(async (ctx, next) => {
//   // 设置cors基本信息
//   ctx.set("Access-Control-Allow-Origin", '*')
//   ctx.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
//   ctx.set("Access-Control-Allow-Headers", "Content-Type, Accept")

//   // 针对复杂请求如何处理
//   if (ctx.method === "OPTIONS") {
//     ctx.status = 204
//     return
//   }

//   await next()
// })

const router = new KoaRouter({prefix: '/users'})
router.get('/list', (ctx, next) => {
  ctx.body = ['james', 'kobe', 'sga', 'curry']
})

app.use(router.routes())
app.listen(8000, () => {
  console.log('服务器启动成功, 监听8000端口')
})