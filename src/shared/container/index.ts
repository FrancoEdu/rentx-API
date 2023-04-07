import {container} from 'tsyringe'
import { ICategoryRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepositories } from '../../modules/cars/repositories/implementations/CategoryRepository'
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';


container.registerSingleton<ICategoryRepository>(
    "CategoriesRepositories",
    CategoriesRepositories
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);