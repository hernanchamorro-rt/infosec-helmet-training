const helmet = require("helmet");
const express = require("express");
const app = express();

app.use(helmet.hidePoweredBy());