import { Request, Response } from "express";
import { Product } from "../database/models/Product";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    const newProduct = new Product({ name, price });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: "Failed to create product" });
  }
};
