app.use("/newproduct", (req, res) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" ><button type="submit">Submit</button></form>'
  );
});

app.use("/product", (req, res) => {
  console.log(req.body);
});

exports.route = router;
