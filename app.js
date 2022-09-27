require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const UsersUtil = require("./utils/UserUtil");
const app = express();

const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const users = await UsersUtil.getUsers();

  res.render("index", {
    users: users,
  });
});

app.get("/oscar", async (req, res) => {
  const users = await UsersUtil.getUsers();

  res.render("oscar", {
    users: users,
  });
});

app.post("/submit", async (req, res) => {
  const response = await UsersUtil.saveUser(req.body);

  if (!response) console.error(response);

  res.redirect("/");
});

app.post("/delete/:userId", async (req, res) => {
  const response = await UsersUtil.deleteUser(req.params.userId);

  if (!response) console.error(response);

  res.redirect("/");
});

app.listen(PORT, () =>
  console.log(`Server is running: http://localhost:${PORT}/`)
);
