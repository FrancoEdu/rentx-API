import { CategoriesRepositories } from "../../repositories/implementations/CategoryRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepositories = CategoriesRepositories.getInstance()
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepositories)
export const listCategoryController = new ListCategoryController(listCategoryUseCase)