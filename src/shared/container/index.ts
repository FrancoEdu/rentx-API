import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoriesRepository";
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
