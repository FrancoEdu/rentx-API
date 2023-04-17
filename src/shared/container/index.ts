import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICarsRepository } from "../../modules/cars/repositories/ICarsRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CarsRepository } from "../../modules/cars/repositories/implementations/CarsRepository";
import { CategoriesRepositories } from "../../modules/cars/repositories/implementations/CategoryRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoriesRepositories",
    CategoriesRepositories
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);

container.registerSingleton<IUserRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
