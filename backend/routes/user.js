const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const zod = require("zod");
const { User } = require("../db/db");
const { authMiddleware } = require("../middleware/middleware");
const signUpBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});
const signInBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
});

const updateBody = zod.object({
  password: zod.optional(),
  firstName: zod.optional(),
  lastName: zod.optional(),
});

router.post("/signup", async (req, res) => {
  const success = signUpBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const username = req.body.username;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const userFind = await User.findOne({
    username,
  });

  if (userFind) {
    res.status(411).json({ msg: "User already exists" });
  }

  await User.create({
    username,
    password,
    firstName,
    lastName,
  });
  const userId = User._id;
  const token = jwt.sign(userId, JWT_SECRET);
  res.status(200).json({ message: "User created successfully", token: token });
});

router.post("/signin", async (req, res) => {
  const success = signInBody.safeParse(req.body);
  if (!success) {
    return res.json({ message: "Invalid inputs" });
  }
  const userFind = await User.find({
    username: req.body.username,
    password: req.body.password,
  });

  if (userFind) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );
    res.json({ token: token });
    return;
  }
  res.status(411).json({
    message: "Error while logging in",
  });
});

router.put("/", authMiddleware, async (req, res) => {
  const success = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }
  await User.updateOne({ _id: req.userId }, req.body);
  res.json({message : "Updated Successfully"})
});

module.exports = {
  router,
};
