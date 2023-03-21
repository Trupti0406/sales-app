const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = mongoose.model("UserModel");
const { JWT_SECRET } = require("../config");

router.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !password || !email) {
    return res
      .status(400)
      .json({ error: "One or more mandatory fields are empty" });
  }
  UserModel.findOne({ email: email })
    .then((userInDB) => {
      if (userInDB) {
        return res
          .status(500)
          .json({ error: "User with this email already registered" });
      }
      bcryptjs
        .hash(password, 16)
        .then((hashedPassword) => {
          const user = new UserModel({
            firstName,
            lastName,
            email,
            password: hashedPassword,
          });
          user
            .save()
            .then((newUser) => {
              res.status(201).json({ result: "User Signed up Successfully!" });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!password || !email) {
    return res
      .status(400)
      .json({ error: "One or more mandatory fields are empty" });
  }
  UserModel.findOne({ email: email })
    .then((userInDB) => {
      if (!userInDB) {
        return res.status(401).json({ error: "Invalid Credentials" });
      }
      bcryptjs
        .compare(password, userInDB.password) //comparing password
        .then((didMatch) => {
          if (didMatch) {
            // In sign method we can pss any data that we want as a part of our token
            const jwtToken = jwt.sign({ _id: userInDB._id }, JWT_SECRET);
            const userInfo = {
              _id: userInDB._id,
              email: userInDB.email,
              fullName: userInDB.fullName,
            };
            res
              .status(200)
              .json({ result: { token: jwtToken, user: userInfo } });
          } else {
            return res.status(401).json({ error: "Invalid Credentials" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;