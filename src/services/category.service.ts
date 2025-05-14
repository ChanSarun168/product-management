import { CategoryRepository } from "../database/repositories/category.repository";
import { ICategory } from "../database/types/category.type";

export class CategoryService{
    studentRepo: CategoryRepository;
    constructor(){
        this.studentRepo = new CategoryRepository();
    }

    // Get all Student
    async getAllCategory(page?: number, num?: number){
        try{
            return await this.studentRepo.FindAllCategory(page,num);
        }catch(error:unknown | any){
            throw error;
        }
    }

    // add student to database
    async AddStudent(data:ICategory){
        try{
            return await this.studentRepo.CreateCategory(data);
        }catch(error:unknown | any){
            throw error;   
        }
    }

    // Get student By Id
    async GetStudentById(id:string){
        try{
            return await this.studentRepo.GetCategoryById(id)
        }catch(error:unknown | any){
            throw error;
        }
    }

    // Update student Info

    async UpdateStudent(id:string , data:object){
        try{
            return await this.studentRepo.UpdateCategory(id , data);
        }catch(error:unknown | any){
            throw error;
        }
    }

    // Delete student
    async DeleteStudent(id:string){
        try{
            return await this.studentRepo.DeleteCategory(id);
        }catch(error:unknown | any){
            throw error;
        }
    }
}