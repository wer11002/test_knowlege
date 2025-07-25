const express = require("express");
const router = express.Router();
const controller = require("../controllers/transactionsController");

router.post("/", controller.addTransaction);
router.get("/", controller.getAllTransactions);
router.get("/balance", controller.getBalance);

module.exports = router;
