const express = require("express");
const path = require("path");
const app = express();

// the app.listen() function starts a server and allows it to listen on a specified port
app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});

// route is a specific URL address or endpoint. where users can get or post an info.

// methods for the req param
//  to get URL: req.url
//  to get queries in the url: req.query
//  to get the method used: req.method
//  to get the body for a POST request: req.body

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/About", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// the sendFile() method is used to send a file as a response to HTTP req.
