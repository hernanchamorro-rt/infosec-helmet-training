const helmet = require("helmet");
const express = require("express");
const app = express();

app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.hsts({ maxAge: 90 * 24 * 60 * 60, force: true }));
app.use(helmet.dnsPrefetchControl());