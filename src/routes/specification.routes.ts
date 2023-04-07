import { Router } from "express";
import {CreateSpecificationController} from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import {ListSpecificationController} from "../modules/cars/useCases/listSpecification/ListSpecificationController";

export const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController()
const listCategoryController = new ListSpecificationController()

specificationRoutes.post("/", createSpecificationController.handle)

specificationRoutes.get('/', listCategoryController.handle);