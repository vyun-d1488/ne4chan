const Router = require("koa-router");
const bodyParser = require("koa-body");
const router = new Router();

const db = require("../db/operations");

router.get("/", async (ctx) => {
	ctx.body = "IO SDX";

	await db.setAsync("WISP", "IO ONE LOVE");
});

router.get("/thread", async (ctx) => {
	ctx.body = [
		{
			Title: "Title",
			Content: "Content",
			Image: "1",
		},
		{
			Title: "Title2",
			Content: "Content2",
			Image: "2",
		},
	];
});

router.get("/learn", async (ctx) => {
	ctx.body = {
		Title: Math.floor(Math.random() * 10),
		Content: Math.floor(Math.random() * 1000),
	};
});

router.post("/thread", bodyParser({ multipart: true }), (ctx) => {
	ctx.body = {
		data: ctx.request.body,
	};
});

module.exports = router.routes.bind(router);
