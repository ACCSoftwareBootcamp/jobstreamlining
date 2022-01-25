const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App on port ${port}`));
