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

app.post("/", (req, res) => {
  // TODO: save to mongo
  //

  res.json("ok");
});

app.listen(PORT, () =>
  console.log(`Server is running: http://localhost:${PORT}/`)
);
