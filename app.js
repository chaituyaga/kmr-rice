require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
var cors = require("cors");
const routes = require("./routes/routesconfig");

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", routes);
require("./db/index");
const port = process.env.PORT || 8080;

app.listen(port, () => console.log("App statred in port :", port));
