const express = require("express");
const ViteExpress = require("vite-express");

const {register, login} = require("./controllers/auth")
const db = require('./util/database')
const {User, Post, Like} = require("./util/models")

const app = express();
app.use(express.json())




app.post("/api/register", register)
app.post("/api/login", login)

db.sync()

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
