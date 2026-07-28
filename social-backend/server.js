const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

// Allows Express to read JSON sent from the frontend
app.use(express.json());

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

app.listen(3000, () => {
  console.log("🚀 Server started on port 3000");
});
