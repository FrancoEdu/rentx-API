import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository"
import { ListSpecificationUseCase } from "./ListSpecificationUseCase"
import { ListSpecificationController } from "./ListSpecificationController"

const specificationRepositories = SpecificationRepository.getInstance()
const listSpecificationUseCase = new ListSpecificationUseCase(specificationRepositories)
export const listSpecificationController = new ListSpecificationController(listSpecificationUseCase)