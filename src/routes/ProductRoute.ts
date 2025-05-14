import express from "express";
import { createProduct } from "../controllers/ProductController";

const router = express.Router();

router.post("/", createProduct);

export default router;
