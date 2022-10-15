import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleWare/errorMiddleware.js";
import productRoutes from './routes/productRoutes.js'
dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Api is running .....");
});

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(
  PORT,
  console.log(`server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
