const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

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

app.use(adminRoutes)
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).send("<h2>Page Otilor!</h2>");
});

// const routes = require("./routes");

// console.log(routes.someText);

// const server = http.createServer(routes.handler);

app.listen(3000);
