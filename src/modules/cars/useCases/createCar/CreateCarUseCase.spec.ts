import { AppError } from "../../../../error/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create car", () => {
    beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepository);
    });

    it("should be able to create a new car", async () => {
        const car = await createCarUseCase.execute({
            name: "Camaro ss",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Chevrolet",
            category_id: "Esportivo",
        });

        expect(car).toHaveProperty("id");
    });

    it("Should not be able top create a car with exists license plate", async () => {
        expect(async () => {
            await createCarUseCase.execute({
                name: "Camaro ss",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Chevrolet",
                category_id: "Esportivo",
            });

            await createCarUseCase.execute({
                name: "Mustang ss",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Ford",
                category_id: "Esportivo",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should not be able top create a car available true by default", async () => {
        const car = await createCarUseCase.execute({
            name: "Camaro ss",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Chevrolet",
            category_id: "Esportivo",
        });

        expect(car.available).toBe(true);
    });
});
