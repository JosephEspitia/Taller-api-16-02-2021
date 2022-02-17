const express = require('express');
const app = express();
const morgan = require("morgan");
const env = require("dotenv");
require("./database")

app.use(morgan("dev"));
app.use(express.json());

env.config();

const port = process.env.PORT;

app.use("/api", require("./routes/user.routes"))
app.listen(port, ()=> console.log("api ok"));


