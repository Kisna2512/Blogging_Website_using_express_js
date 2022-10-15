const express = require("express");
var exphbs = require("express-handlebars");

const path = require("path");
const app = express();
const port = 3000;

// const krishnaMiddleware = (req, res, next) => {
//   console.log(req);
//   next();
// };

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
// app.set("port", process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, "static")));
// app.use(krishnaMiddleware);
app.use("/", require(path.join(__dirname, "routes/blog.js")));

app.listen(port, () => {
  console.log(`Blog app listening on port http://localhost:${port}`);
});
