const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user")
const authRouter = require ("./routes/auth")
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");


dotenv.config();


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull!"))
  .catch((err) => {
    console.log(err);
  });

 app.use(express.json());
 app.use("/api/users", userRouter)
 app.use("/api/auth", authRouter)
 app.use("/api/products", productRouter)
 app.use("/api/carts", cartRouter);
 app.use("/api/orders", orderRouter);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running");
});