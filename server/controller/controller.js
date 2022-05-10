var Userdb = require("../model/model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(404).send("Empty request made");
    return;
  }
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
  user
    .save(user)
    .then((data) => {
      console.log("User saved successfully");
    })
    .catch((err) => {
      res.status(500).send("Internal server error");
    });
};

exports.find = (req, res) => {
  Userdb.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send("Internal server error");
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(404).send("Empty request made");
    return;
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) res.status(404).send("No user found to update");
      else res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send("Internal server error");
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id, req.body)
    .then((data) => {
      if (!data) res.status(404).send("No user found to delete");
      else res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send("Internal server error");
    });
};
