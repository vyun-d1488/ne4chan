const Koa = require("koa");
const logger = require("koa-logger");
const app = new Koa();
const Port = process.env.Port || 80;

app.use(logger());

app.use((_this, next) => {

	_this.body = "Hello world";

});

app.listen(Port);
