import { CategoriesRepositories } from "../../repositories/implementations/CategoryRepository";
import { CreateCategoryController } from "././CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepositories = CategoriesRepositories.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositories)

export const createCategoryController = new CreateCategoryController(createCategoryUseCase)