import { Router } from 'express'
import { categoriesRoutes } from './categories.routes'
import { specificationRoutes } from './specification.routes'
import { usersRouter } from './users.routes'
import { authenticateRoutes } from './authenticate.routes'

const router = Router()

router.use("/categories", categoriesRoutes)
router.use("/specifications", specificationRoutes)
router.use("/users", usersRouter)
router.use(authenticateRoutes)

export { router }