const express = require("express");
const axios = require("axios");

const router = express.Router();

const controller = require("../controller/controller");

router.get("/", (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then((response) => {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send("Error occurred: " + err.message);
    });
});

router.get("/new-user", (req, res) => {
  res.render("new_user");
});

router.get("/update-user", (req, res) => {
  res.render("update");
});

router.post("/api/users", controller.create);

router.get("/api/users", controller.find);

router.put("/api/users/:id", controller.update);

router.delete("/api/users/:id", controller.delete);

module.exports = router;
