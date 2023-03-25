const express = require("express");
const router = express.Router();
const Sale = require("../models/sales_model");
const authMiddleware = require("../middleware/authMiddleware");

//Adding the Sales
router.post("/addsale", authMiddleware, (req, res) => {
  const { productName, quantity, amount } = req.body;

  if (!productName || !quantity || !amount) {
    return res.status(400).json({ err: "Fill all the mandatory Fields" });
  }
  //   req.user.password = undefined;
  const addSales = new Sales({
    productName: productName,
    quantity: quantity,
    amount: amount,
    author: req.user,
  });
  addSales
    .save()
    .then((newSales) => {
      res.status(201).json({ sales: newSales });
    })
    .catch((err) => {
      res.status(401).json({ err: "something went wrong" });
      console.log(err);
    });
});

//gathering top 5 sales from DB
// router.get("/top5Sales", (req, res) => {
//   Sale.find({})
//     .sort({ amount: -1 })
//     .limit(5)
//     .exec((err, sales) => {
//       if (err) {
//         s;
//         console.log(err);
//         res.status(500).send("Error retreiving top 5 data");
//       } else {
//         res.json(sales);
//       }
//     });
// });
router.get("/top5Sales", authMiddleware, (req, res) => {
  Sale.find({ author: req.user._id })
    .populate("author", "_id productName quantity amount")
    .sort({ quantity: -1 })
    .limit(5)
    .then((topsales) => {
      res.status(200).json({ Sale: topsales });
      // console.log({ Sale: topsales });
    })
    .catch((err) => {
      res.status(401).json({ err: "Somthing goes wrong" });
      console.log(err);
    });
});

//Gathering sales amount and revenue of the day
router.get("/revenue", (req, res) => {
  Sale.find()
    .sort({ amount: -1 })
    .limit(5)
    .then((error, sales) => {
      if (error) console.log(error);

      res.status(200).json({ sales });
    });
});
module.exports = router;
