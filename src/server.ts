import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "reflect-metadata";
import "./shared/container";

import { router } from "./routes";
// eslint-disable-next-line import-helpers/order-imports
import swaggerFile from "./swagger.json";

import "./database";

// eslint-disable-next-line import-helpers/order-imports
import { AppError } from "./error/AppError";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "Error",
            message: `Internal Server Error - ${err.message}`,
        });
    }
);

app.listen(3334, () => {
    console.log("Server is running 🚀 !");
});
