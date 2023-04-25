import { AppError } from "../../../../error/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "../../repositories/in-memory/SpecificationRepositoryInMemory";
import { CreateCarSpecificationUseCase } from "./createCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationRepositoryInMemory;

describe("Create car specification", () => {
    beforeEach(() => {
        specificationsRepositoryInMemory =
            new SpecificationRepositoryInMemory();
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
            carsRepositoryInMemory,
            specificationsRepositoryInMemory
        );
    });
    it("should not be able to add new specification to the non-existing car", async () => {
        expect(async () => {
            const car_id = "1234";
            const specifications_id = ["576757"];
            await createCarSpecificationUseCase.execute({
                car_id,
                specifications_id,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
    it("should be able to add new specification to the car", async () => {
        await carsRepositoryInMemory.create({
            name: "Camaro ss",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Chevrolet",
            category_id: "Esportivo",
        });

        const car_id = "1234";
        const specifications_id = ["576757"];

        await createCarSpecificationUseCase.execute({
            car_id,
            specifications_id,
        });
    });
});
