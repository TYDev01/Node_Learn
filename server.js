const express = require("express");
const app = express();
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// To use middleware, while making a request, use app.use()
// app.use("/home", (req, res, next) => {
//   // Each time a request is sent to the server, this middleware will run
//   res.send("<h2>Hello world!</h2>");
//   next(); // Allows the request to continue to the next middleware in line
// });

// app.use((req, res, next) => {
//   // This middleware will run for every request
//   let num = 2 + 5;
//   console.log(num);
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// const routes = require("./routes");

// console.log(routes.someText);

// const server = http.createServer(routes.handler);

app.listen(3000);
