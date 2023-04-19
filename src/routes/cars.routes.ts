import { Router } from "express";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCarController } from "../modules/cars/useCases/createCar/CreateCarController";
import { ListCarAvailableController } from "../modules/cars/useCases/listAvailableCar/ListCarAvailableController";

export const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarAvailableController = new ListCarAvailableController();
carsRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    createCarController.handle
);

carsRoutes.get("/available", listCarAvailableController.handle);
