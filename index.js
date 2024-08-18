const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const router = require("./src/routes/api");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const { Server } = require("socket.io");

//Security Middleware

const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

const app = express();
const http = require("http");
const expressServer = http.createServer(app);

const io = new Server(expressServer);
// Store active socket connections
const activeSockets = new Set();

io.on("connection", (socket) => {
  console.log("New user connected");

  // Add the socket to the activeSockets set
  activeSockets.add(socket);

  socket.on("msg", (data) => {
    io.sockets.emit("serverMSG", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");

    // Remove the socket from the activeSockets set
    activeSockets.delete(socket);
  });
});

const allowedOrigins = [
  "https://travel-booking-frontend-next-js-redux-vercel.vercel.app",
  "http://localhost:3000",
  // Add more origins as needed
];
//Middleware Implementation
app.use(cookieParser());
app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        // Allow the request if the origin is in the allowed list or if no origin (for non-browser clients)
        callback(null, true);
      } else {
        // Reject the request if the origin is not in the allowed list
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());

//Body parser implementation

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

//file upload api endpoint
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    const filename = uniqueSuffix + fileExtension;
    cb(null, filename);
  },
});

const upload = multer({ storage });

app.use(express.static("public"));

app.post("/upload", upload.single("fileInput"), (req, res) => {
  // Get the file pathname based on the destination and filename generated by Multer
  const fileUrl = `/uploads/${req.file.filename}`;

  // Create a JSON response with the file pathname
  const jsonResponse = { message: "File uploaded successfully", fileUrl };

  res.status(200).json(jsonResponse);
});

//Routing are done here
app.use("/apis/v1", router);

// Mongo DB Database Connection
let URI = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.fbrulyl.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

// let URI = `mongodb://127.0.0.1:27017/${process.env.DATABASE_USERNAME}`;

let OPTION = {
  autoIndex: true,
};
mongoose
  .connect(URI, OPTION)
  .then(() => {
    console.log(">Mongoose Connection Successful 2");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.status(200).send("Hello from the server");
});

expressServer.listen(process.env.PORT || 5000, () => {
  console.log(">Server Ready on http://localhost:" + process.env.PORT);
});
