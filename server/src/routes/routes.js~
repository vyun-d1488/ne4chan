const router = new Router();

router.get("/", async (ctx) => {
	ctx.body = "IO SDX";

	await db.setAsync("WISP", "IO ONE LOVE");
});

router.get("/learn", async (ctx) => {
	ctx.body = {
		Title: "TESDFDFDFDF",
		Content: "LET DO THGE DFSDFSDFSDFSDFSDFSDFSDF",
	};
});

router.post("/", bodyParser, (ctx) => {
	ctx.body = {
		data: ctx.request.body,
	};
});

// export default router;
