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
let messagesCollection;

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    // Open Database
    const db = client.db("SocialEarth");

    // Open Collection
    usersCollection = db.collection("users");
    messagesCollection = db.collection("messages");

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

app.post("/update-profile", async (req, res) => {
  console.log("Profile route hit");
  try {
    const { email, name, username, bio } = req.body;

    await usersCollection.updateOne(
      { email },
      {
        $set: {
          name,
          username,
          bio,
        },
      },
    );

    res.json({
      success: true,
      message: "Profile updated successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

app.get("/profile", async (req, res) => {
  try {
    const { email } = req.query;

    const user = await usersCollection.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

app.get("/search", async (req, res) => {
  try {
    const { q } = req.query;

    const users = await usersCollection
      .find({
        $or: [
          { name: { $regex: q, $options: "i" } },
          { username: { $regex: q, $options: "i" } },
        ],
      })
      .toArray();

    res.json({
      success: true,
      users,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

app.post("/send-message", async (req, res) => {
  console.log(req.body);
  try {
    const { sender, receiver, text } = req.body;

    await messagesCollection.insertOne({
      sender,
      receiver,
      text,
      createdAt: new Date(),
    });

    res.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

app.get("/messages", async (req, res) => {
  const { sender, receiver } = req.query;

  const messages = await messagesCollection
    .find({
      $or: [
        { sender, receiver },
        { sender: receiver, receiver: sender },
      ],
    })
    .toArray();

  res.json({
    success: true,
    messages,
  });
});

app.listen(3000, () => {
  console.log("🚀 Server started on port 3000");
});
