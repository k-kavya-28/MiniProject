const LaundryStaff = require("../models/laundry.staff");
const jwt_key = process.env.JWT_KEY;
const jwt = require("jsonwebtoken");
// const bcrypt=require("bcrypt")

const SignUpController = async (req, res) => {
  try {
    const UserData = req.body;
    console.log(UserData);

    const existingUser = await LaundryStaff.findOne({
      userID: UserData.userID,
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this userID already exists" });
    }

    const user = new LaundryStaff(UserData);

    await user.save();

    res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const SignInController = async (req, res) => {
  try {
    const { userID, password } = req.body;
    const user = await LaundryStaff.findOne({ userID: userID });
    if (!user) {
      return res.json({ message: "Invalid credentials", created: false});
    }
    if (user.password !== password) {
      return res.json({ message: "Invalid credentials",  created: false });
    }
    const token = jwt.sign({ id: user._id }, jwt_key);
    res.status(200).json({ token: token, message: "Logged in successfully",  created: true });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
};

const fetchData = async (req, res) => {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, jwt_key);
    const laundryStaff = await LaundryStaff.findById(decoded.id);
    console.log(laundryStaff);
  } catch (error) {
    console.log(error.message);
    res.send({
      message: error.message,
    });
  }
};

module.exports = { SignUpController, SignInController, fetchData };
