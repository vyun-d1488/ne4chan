const Koa = require("koa");
const logger = require("koa-logger");
const app = new Koa();

app.use(logger());

app.use((_this, next) => {
	_this.body = "Hello world";
});

app.listen(3000);
