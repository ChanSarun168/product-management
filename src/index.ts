import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./configs/db";
import productRoutes from "./routes/ProductRoute";
import { studentRoute } from "./routes/category.routes";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/category" , studentRoute)

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// global error
app.use(errorHandler);
