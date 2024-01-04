const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.router");
const { productRouter } = require("./routes/product.route");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

// app.get("/",(req,res)=>{
// res.send("Home Page")
// })



app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
    console.log("Server is running...");
  } catch (error) {
    console.log(error);
  }
});
