import { Router } from "express";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCarController } from "../modules/cars/useCases/createCar/CreateCarController";
import { ListCarAvailableController } from "../modules/cars/useCases/listAvailableCar/ListCarAvailableController";
import { CreateCarSpecificationController } from "../modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";

export const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarAvailableController = new ListCarAvailableController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    createCarController.handle
);

carsRoutes.get("/available", listCarAvailableController.handle);
carsRoutes.post("/specifications/:id",ensureAuthenticated,ensureAdmin,createCarSpecificationController.handle);