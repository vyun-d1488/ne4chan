const logger = require("koa-logger");
const static = require("koa-static");
const bodyParser = require("koa-body")();
const redis = require("redis");
const bluebird = require("bluebird");

// const routes = require("./src/routes/routes");

bluebird.promisifyAll(redis.RedisClient.prototype);
const db = redis.createClient();

const Koa = require("koa");
const Router = require("koa-router");

const server = new Koa();
const router = new Router();

const Port = 3001;

router.get("/", async (ctx) => {
	ctx.body = "IO SDX";

	await db.setAsync("WISP", "IO ONE LOVE");
});

router.get("/learn", async (ctx) => {
	ctx.body = {
		Title: "ЧТО",
		Content: "РАБОТАЕТ?",
	};
});

router.post("/", bodyParser, (ctx) => {
	ctx.body = {
		data: ctx.request.body,
	};
});

server
	.use(logger())

	.use(router.routes())

	.use(static("public"))

	.listen(Port);
