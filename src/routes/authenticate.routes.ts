import { Router } from "express";

import { AuthenticateUserContoller } from "../modules/accounts/useCases/authenticateUser/authenticateUserController";

export const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserContoller();

authenticateRoutes.post("/sessions", authenticateUserController.handle);
