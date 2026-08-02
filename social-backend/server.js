const cors = require("cors");
const express = require("express");

const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(cors());

// Allows Express to read JSON sent from the frontend
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/loginUI")));

// MongoDB Connection
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let usersCollection;

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    // Open Database
    const db = client.db("SocialEarth");

    // Open Collection
    usersCollection = db.collection("users");

    console.log("✅ Database Ready");
  } catch (err) {
    console.log(err);
  }
}

connectDB();

// Home Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Register Route
app.post("/register", async (req, res) => {
  try {
    const user = req.body;

    const existingUser = await usersCollection.findOne({
      email: user.email,
    });

    if (existingUser) {
      return res.json({
        success: false,
        message: "Email already exists",
      });
    }

    console.log(user);

    await usersCollection.insertOne(user);

    res.json({
      success: true,
      message: "User Registered Successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await usersCollection.findOne({
    email,
  });
  if (!existingUser) {
    return res.json({
      success: false,
      message: "User does not exist",
    });
  }
  if (existingUser.password !== password) {
    return res.json({
      success: false,
      message: "Incorrect password",
    });
  }
  return res.json({
    success: true,
    message: "Login Successful",
  });
});

app.listen(3000, () => {
  console.log("🚀 Server started on port 3000");
});
