const express = require("express");
const {
  getIsUserExist,
  createAUser,
  validateOtp,
} = require("../controllers/usersController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/isUser", (req, res) => {
  getIsUserExist(req.body.mailId).then((response) => {
    res.send(response.body);
  });
});

router.post("/signUpUser", (req, res) => {
  createAUser(req.body).then((resp) => {
    res.send(resp.body);
  });
});

router.post("/validateOtp", (req, res) => {
  validateOtp(req.body).then((response) => {
    res.send(response);
  });
});

module.exports = router;
