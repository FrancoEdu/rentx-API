import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListCarAvailableUseCase } from "./ListCarAvailableUseCase";

let listCarAvailableUseCase: ListCarAvailableUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listCarAvailableUseCase = new ListCarAvailableUseCase(
            carsRepositoryInMemory
        );
    });

    it("Should be able to list available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Camaro SS",
            daily_rate: 160,
            license_plate: "ABCD-1234",
            fine_amount: 100,
            brand: "Chevrolet",
            category_id: "75c0ec09-c0be-4170-9033-ad7fb82f74fa",
        });

        const cars = await listCarAvailableUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Camaro SS1",
            daily_rate: 160,
            license_plate: "ABCD-1234",
            fine_amount: 100,
            brand: "Chevrolet",
            category_id: "75c0ec09-c0be-4170-9033-ad7fb82f74fa",
        });

        const cars = await listCarAvailableUseCase.execute({
            name: "Camaro SS",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Camaro SS2",
            daily_rate: 160,
            license_plate: "PLACA-789",
            fine_amount: 100,
            brand: "Chevrolet",
            category_id: "75c0ec09-c0be-4170-9033-ad7fb82f74fa",
        });

        const cars = await listCarAvailableUseCase.execute({
            brand: "Chevrolet",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by category_id", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Camaro SS2",
            daily_rate: 160,
            license_plate: "PLACA-789",
            fine_amount: 100,
            brand: "Chevrolet",
            category_id: "75c0ec09-c0be-4170-9033-ad7fb82f74fa",
        });

        const cars = await listCarAvailableUseCase.execute({
            category_id: "75c0ec09-c0be-4170-9033-ad7fb82f74fa",
        });

        expect(cars).toEqual([car]);
    });
});
