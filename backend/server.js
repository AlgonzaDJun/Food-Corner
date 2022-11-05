const express = require("express");
const app = express();
const db = require("./db");
const Food = require("./models/foodModel");

app.use(express.json());

const foodsRoute = require("./routes/foodsRoute");
const userRoute = require("./routes/userRoute");

app.use("/api/foods/", foodsRoute);
app.use("/api/users/", userRoute);

app.get("/", (req, res) => {
  res.send("Server Working... ");
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running in http://localhost:${port}`)
);
