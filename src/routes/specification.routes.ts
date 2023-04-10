import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/listSpecification/ListSpecificationController";

export const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listCategoryController = new ListSpecificationController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", listCategoryController.handle);
