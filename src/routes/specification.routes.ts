import { Router } from "express";
import { createSpeficicationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecification";

export const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
    return createSpeficicationController.handle(request, response)
})

specificationRoutes.get('/', (request,response) => {
    return listSpecificationController.handle(request,response)
})