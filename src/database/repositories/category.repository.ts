import mongoose from "mongoose";
import { CategoryModel } from "../models/category.model";
import { ICategory } from "../types/category.type";
import { BaseCustomError } from "../../utils/customError";
import { StatusCode } from "../../utils/consts";

export class CategoryRepository {
  // Get All Categories with Optional Pagination
  async FindAllCategory(page?: number, num?: number) {
    try {
      const pageNumber = page || 1;
      const pageSize = num || 10;

      const skip = (pageNumber - 1) * pageSize;

      const category = await CategoryModel.find()
        .skip(skip)
        .limit(pageSize);

      return category;
    } catch (error: unknown) {
      throw error;
    }
  }

  async CreateCategory(data: ICategory) {
    try {
      const newCategory = await CategoryModel.create(data);
      return newCategory;
    } catch (error: unknown | any) {
      throw error;
    }
  }

  // Get Student by Id
  async GetCategoryById(id: string) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new BaseCustomError("Id is wrong format", StatusCode.BadRequest);
      }
      const category = await CategoryModel.findById(id);
      if (!category) {
        const customError = new BaseCustomError(
          "Student not found. Please check the provided ID.",
          StatusCode.NoContent
        ); // Create custom error
        throw customError;
      }
      return category;
    } catch (error: unknown | any) {
      throw error;
    }
  }
   // update Student Info
  async UpdateCategory(id: string, data: object) {
    try {
      // check if Id is invalid from mongodb
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new BaseCustomError("Id is wrong format", StatusCode.BadRequest);
      }

      // check db to find student
      const category = await CategoryModel.findById(id);
      if (!category) {
        const customError = new BaseCustomError(
          "Student not found. Please check the provided ID.",
          StatusCode.NoContent
        ); // Create custom error
        throw customError;
      }

      const updatecategory = await CategoryModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updatecategory;
    } catch (error: unknown | any) {
      throw error;
    }
  }

  // Delete student (soft delete)
  async DeleteCategory(id: string) {
    try {
      // check if Id is invalid from mongodb
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new BaseCustomError("Id is wrong format", StatusCode.BadRequest);
      }

      // check db to find student
      const category = await CategoryModel.findById(id);
      if (!category) {
        const customError = new BaseCustomError(
          "Student not found. Please check the provided ID.",
          StatusCode.NoContent
        ); // Create custom error
        throw customError;
      }

      return await CategoryModel.findByIdAndDelete(id);
    } catch (error: unknown | any) {
      throw error;
    }
  }
}
