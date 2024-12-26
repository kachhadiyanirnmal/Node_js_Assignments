const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const DBURL = process.env.DBURL;

app.use(express.json());

mongoose
  .connect(
     "mongodb+srv://NirmalKachhadiya:test@cluster0.lcsbp.mongodb.net/rest?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/products", require("../router/productrouter"));
app.use("/category", require("../router/categoryrouter"));
app.use("/users", require("../router/userrouter"));
app.use("/carts", require("../router/cartrouter"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});