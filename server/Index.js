const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt=require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const JWT_SECRET = "Revanth2006"; 
const authMiddleware = require("./models/authMiddleware");
const authorizeRole = require("./models/authorizeRole");


const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

const mongoURI =
"mongodb+srv://navyasridasari29:Revanth2006@cluster0.7tzjs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose
  .connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log("Unable to connect to MongoDB Atlas: " + error));

app.post("/users", async (req, res) => {
  try {
    const { name, email, phone, password, confirmpassword, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const hashedConfirmPassword = await bcrypt.hash(confirmpassword, salt);

    // Create user with hashed password
    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      confirmpassword: hashedConfirmPassword,
      role,
    });

    await user.save();
    res.status(201).json({ message: "Inserted data successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Login User (Compare Passwords)
// ✅ Login User (Now Returns JWT Token)
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ Compare hashed password with user input
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ Generate JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email ,role:user.role},
      JWT_SECRET,
      { expiresIn: "7d" } // Token valid for 7 days
    );

    console.log("Login successful, Token:", token);

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
app.get("/admin", authMiddleware, authorizeRole("admin"), (req, res) => {
  res.json({ message: "Welcome admin!" });
});

app.get("/user-dashboard", authMiddleware, authorizeRole("user", "admin"), (req, res) => {
  res.json({ message: "Welcome user!" });
});

// ✅ Get All Users
app.get("/getusers", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Update User
app.put("/updateUsers/:id", async (req, res) => {
  try {
    const userid = req.params.id;
    const { name, email, phone, password, confirmpassword, role } = req.body;

    // Hash password before updating
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const hashedConfirmPassword = await bcrypt.hash(confirmpassword, salt);

    const updateUsers = await User.findByIdAndUpdate(
      userid,
      { name, email, phone, password: hashedPassword, confirmpassword: hashedConfirmPassword, role },
      { new: true, runValidators: true }
    );

    if (!updateUsers) {
      return res.status(400).json({ message: "User not found to update" });
    }

    res.status(200).json({ message: "Updated user successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Delete User
app.delete("/deleteuser/:id", async (req, res) => {
  try {
    const userid = req.params.id;
    const deleteuser = await User.findByIdAndDelete(userid);
    if (!deleteuser) {
      return res.status(404).json({ message: "User not found to delete" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

// ✅ Protected Profile Route
app.get("/profile", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// ✅ Home Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express</h1>");
});

app.get("/home", (req, res) => {
  res.send("<h1>Welcome to Home page</h1>");
});

// ✅ Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});