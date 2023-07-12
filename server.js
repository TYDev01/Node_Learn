const express = require("express");
const app = express();
const path = require("path");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");
const e = require("express");
app.use(bodyParser.urlencoded({ extended: true }));
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

app.set('view engine', 'pug'); // Set the view engine to pug
app.set('views', 'views') // Set the views folder to views


app.use("/admin", adminData.routes);
app.use(shopRoutes);
app.use((req, res) => {
  res.status(404).render('404', {pageTitle: 'Page not found'});
});



// const routes = require("./routes");

// console.log(routes.someText);

// const server = http.createServer(routes.handler);

app.listen(3000);
