const express = require("express");
const {
  getIsUserExist,
  createAUser,
  validateOtp,
} = require("../controllers/usersController");
const {
  getSuppliers,
  addSupplier,
} = require("../controllers/supplierController");
const { getAllStocks, addStocks } = require("../controllers/stocksController");
const router = express.Router();

router.post("/isUser", (req, res) => {
  getIsUserExist(req.body.mailId)
    .then((response) => {
      res.send(response.body);
    })
    .catch((err) => {
      res.send("Internal Server Error");
    });
});

router.post("/signUpUser", (req, res) => {
  createAUser(req.body)
    .then((resp) => {
      res.send(resp.body);
    })
    .catch((err) => {
      res.send("Internal Server Error");
    });
});

router.post("/validateOtp", (req, res) => {
  validateOtp(req.body)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send("Internal Server Error");
    });
});

router.get("/suppliers", (req, res) => {
  getSuppliers()
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      res.send("Internal Server Error");
    });
});

router.post("/addSupplier", (req, res) => {
  addSupplier(req.body.suppliername)
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      res.send("Internal Server Error");
    });
});

router.get("/stocks", (req, res) => {
  getAllStocks()
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/addStocks", (req, res) => {
  addStocks(req.body.value)
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
