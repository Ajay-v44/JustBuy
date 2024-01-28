const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const connectdb = require("./config/connectDb");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });
const products = require("./routes/product");
const orders = require("./routes/order");
connectdb();
//to convert data to json
app.use(express.json())

app.use("/api/v1/", products);
app.use("/api/v1/", orders);
app.listen(process.env.PORT, () => {
  console.log(
    `server listening on port ${process.env.PORT} in ${process.env.NODE_ENV} `
  );
});
