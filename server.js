var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Cors = require("cors");

const postRoute = require("./server/routes/posts");

var app = express();

// Tell express to use the following parsers for POST data
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(Cors());
// Add support for CORS
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );
//   next();
// });

app.use("/posts", postRoute);

// Establish a connetion to the Mongodb Database
mongoose.connect(
  "mongodb+srv://sulav:f50NbFsRbWGFojDI@cluster0.pcazi.mongodb.net/DiscussionAbroad?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err, res) => {
    if (err) {
      console.log("Connection failed: " + err);
    } else {
      console.log("Connected to database!");
    }
  }
);

// Define the port address and tell express to use this port
const port = process.env.PORT || "3000";
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

// Tell the server to start listening on the provided port
server.listen(port, () => {
  console.log(`API running on localhost:${port}`);
});

//f50NbFsRbWGFojDI
