import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/uploadFile";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCarController } from "../modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "../modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListCarAvailableController } from "../modules/cars/useCases/listAvailableCar/ListCarAvailableController";
import { UploadCarImageController } from "../modules/cars/useCases/uploadCarImage/UploadCarImageController";

export const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarAvailableController = new ListCarAvailableController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImageController = new UploadCarImageController();

const uploadCarsImage = multer(uploadConfig.upload("./tmp/cars"));

carsRoutes.post("/", ensureAuthenticated, createCarController.handle);

carsRoutes.get("/available", listCarAvailableController.handle);
carsRoutes.post(
    "/specifications/:id",
    ensureAuthenticated,
    createCarSpecificationController.handle
);

carsRoutes.post(
    "/images/:id",
    ensureAuthenticated,
    uploadCarsImage.array("images"),
    uploadCarImageController.handle
);
