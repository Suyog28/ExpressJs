const express = require("express");
const path = require("path");
const app = express();
const mainRouter = require("./route/index");
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");
//console.log(app.get("views"));

app.use(express.static("public"));

app.use(mainRouter);

app.listen(4000, () => console.log(`Server is listen on :${PORT}`));
