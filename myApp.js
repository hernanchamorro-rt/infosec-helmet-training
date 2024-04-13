const helmet = require("helmet");
const express = require("express");
const app = express();

app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));