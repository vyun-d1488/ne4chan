const logger = require("koa-logger");
const static = require("koa-static");

const routes = require("./src/routes/routes");

const Koa = require("koa");
const Router = require("koa-router");

const server = new Koa();
const router = new Router();

const Port = 3001;

server

	.use(logger())

	.use(router.routes(), router.allowedMethods())

	.use(routes())

	.use(static("public"))

	.listen(Port);
