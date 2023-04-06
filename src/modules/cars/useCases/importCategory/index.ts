import { CategoriesRepositories } from "../../repositories/implementations/CategoryRepository"
import { ImporCategoryController } from "./ImportCategoryController"
import { ImportCategoryUseCase } from "./ImportCategoryUseCase"

const categoryRepository = CategoriesRepositories.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository)
export const imporCategoryController = new ImporCategoryController(importCategoryUseCase)