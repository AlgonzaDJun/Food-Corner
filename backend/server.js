const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");
const cookieParser = require("cookie-parser");
// const Food = require("./models/foodModel");
const bodyParser = require("body-parser");
require("dotenv").config();

// middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", `*`);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

const foodsRoute = require("./routes/foodsRoute");
const userRoute = require("./routes/userRoute");
const standsRoute = require("./routes/standsRoute");
const orderRoute = require("./routes/orderRoute");

app.use("/api/foods/", foodsRoute);
app.use("/api/users/", userRoute);
app.use("/api/stands/", standsRoute);
app.use("/api/orders/", orderRoute);

app.get("/", (req, res) => {
  res.send("Server Working... ");
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running in http://localhost:${port}`)
);
