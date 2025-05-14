import { NextFunction } from "express";
import { CategoryService } from "../services/category.service";
import { ICategory } from "../database/types/category.type";


export class StudentController{

    studentservice:CategoryService;
    constructor(){
        this.studentservice = new CategoryService();
    }

    async getAllStudent(page?: number, num?: number):Promise<any>{

        try{
            return await this.studentservice.getAllCategory(page,num);
        }catch(error:unknown | any){
            throw error;
        }

    }

    // Create Student

    async CreateStudent(data:ICategory):Promise<any>{
        try{
            return await this.studentservice.AddStudent(data);
        }catch(error:unknown | any){
            throw error;
        }
    }

    // Get Student By Id
    async GetStudentById(id:string):Promise<any>{
        try{
            return await this.studentservice.GetStudentById(id);
        }catch(error:unknown |any){
            throw error;
        }
    }

    // Update Student data
    async UpdateStudent(id:string , data:object):Promise<any>{
        try{
            return await this.studentservice.UpdateStudent(id , data);
        }catch(error:unknown | any){
            throw error;
        }
    }

    // Delete Student
    async DeleteStudent(id:string):Promise<any>{
        try{
            return await this.studentservice.DeleteStudent(id);
        }catch(error:unknown | any){
            throw error;
        }
    }
}