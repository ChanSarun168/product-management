import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    is_active: {
      type: String,
      enum: ["active", "inactive"],
      required: true,
    },
  },
  {
    toJSON: {
      transform(_doc, ret) {
        delete ret.__v;
      },
    },
  }
);

export const CategoryModel = mongoose.model("Category", CategorySchema);
