const logger = require("koa-logger");
const static = require("koa-static");
const bodyParser = require("koa-body")();
const redis = require("redis");
const bluebird = require("bluebird");

bluebird.promisifyAll(redis.RedisClient.prototype);
const db = redis.createClient();

const Koa = require("koa");
const Router = require("koa-router");

const server = new Koa();
const router = new Router();

const Port = process.env.Port || 80;

router.get("/", async ctx => {

	ctx.body = "IO SDX";

	await db.setAsync("WISP", "IO ONE LOVE");

});

router.post("/", bodyParser, ctx => {

	ctx.body = {

		data: ctx.request.body

	}

})


server.use(logger())

	.use(router.routes())
	
	.use(static("public"))
	
	.listen(Port);
