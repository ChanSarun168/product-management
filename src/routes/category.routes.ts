import { NextFunction, Router , Request , Response } from "express";
import { StudentController } from "../controllers/category.controller";
import { BaseCustomError } from "../utils/customError";
import { StatusCode } from "../utils/consts";
import { ICategory } from "../database/types/category.type";


export const studentRoute = Router();
const studentcontroller = new StudentController();

// get all user
studentRoute.get("/" , async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const { page, num } = req.query;
        const parsedPage = page ? parseInt(page as string, 10) : undefined;
        const parsedNum = num ? parseInt(num as string, 10) : undefined;
        const student = await studentcontroller.getAllStudent(parsedPage, parsedNum);

        if(student.length > 0){
            res.json({
                status: "success",
                message: "students have been found!!",
                data: student 
            })
        }else{
            throw new BaseCustomError("No Student in Database", StatusCode.NotFound);
        }

    }catch(error){
        next(error);
    }
})

// Create Student
studentRoute.post("/" , async (req:Request , res:Response, next:NextFunction)=>{
    try{
        const { name , is_active } = req.body
        const data:ICategory = {
            name,
            is_active
        }
        const newStudent = await studentcontroller.CreateStudent(data);
        res.json({
            status:"Success",
            message:"Student created!!",
            data:newStudent
        })
    }catch(error){
        next(error);
    }
})

// Update Student Info
studentRoute.put("/:id",async (req:Request , res:Response , next:NextFunction)=>{
    try{
        const categoryId = req.params.id;
        const data = req.body;
        const updateStudent = await studentcontroller.UpdateStudent(categoryId,data);
        res.json({
            status : "Success",
            message : "Student has been updated successfully",
            data : updateStudent
        })
    }catch(error:unknown | any){
        next(error);
    }
})

// Get Student By id
studentRoute.delete("/:id",async (req:Request , res:Response , next:NextFunction)=>{
    try{
        const categoryId = req.params.id;
        const student =  await studentcontroller.DeleteStudent(categoryId);
        res.json({
            status : "success",
            message : "Student has been Delete!",
        })
    }catch(error:unknown | any){
        next(error);
    }
})

// Get Student By id
studentRoute.get("/:id",async (req:Request , res:Response , next:NextFunction)=>{
    try{
        const categoryId = req.params.id;
        console.log("hi from get by id");
        const student =  await studentcontroller.GetStudentById(categoryId);
        res.json({
            status : "success",
            message : "Student has been found !",
            data : student
        })
    }catch(error:unknown | any){
        console.log("error: " , error.StatusCode);
        console.log("error:" , error)
        next(error);
    }
})