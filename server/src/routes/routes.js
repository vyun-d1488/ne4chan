const Router = require("koa-router");
const bodyParser = require("koa-body");
const router = new Router();

const db = require("../db/operations");

router.get("/", async (ctx) => {
	ctx.body = "IO SDX";

	await db.setAsync("WISP", "IO ONE LOVE");
});

router.get("/learn", async (ctx) => {
	ctx.body = {
		Title: Math.floor(Math.random() * 10),
		Content: Math.floor(Math.random() * 1000),
	};
});

router.post("/", bodyParser({ multipart: true }), (ctx) => {
	ctx.body = {
		data: ctx.request.body,
	};
});

module.exports = router.routes.bind(router);
