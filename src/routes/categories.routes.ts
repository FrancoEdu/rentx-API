import { Router } from "express";
import multer from "multer";
import {createCategoryController} from "../modules/cars/useCases/createCategory"
import { listCategoryController } from "../modules/cars/useCases/listCategory";
import { imporCategoryController } from "../modules/cars/useCases/importCategory";

export const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
})

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request,response)
})

categoriesRoutes.post("/import", upload.single("file"),(request, response) => {
    return imporCategoryController.handle(request,response)
})