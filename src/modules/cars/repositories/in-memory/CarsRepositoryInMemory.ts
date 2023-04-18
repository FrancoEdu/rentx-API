import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Cars } from "../../entities/Cars";
import { ICarsRepository } from "../ICarsRepository";

export class CarsRepositoryInMemory implements ICarsRepository{
    
    car: Cars[] = []

    async create({
        name,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: ICreateCarDTO): Promise<void> {
        const cars = new Cars()

        Object.assign(cars, {
            name,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
        })

        this.car.push(cars)
    }

    async findByLicensePlate(license_plate: string): Promise<Cars>{
        return this.car.find((car) => car.license_plate === license_plate)
    }

    async findAvailable(brand?: string, category_id?:string, name?:string): Promise<Cars[]> {
        const car = this.car
        .filter((cars) => cars.available === true)
        .filter(((cars) => brand && cars.brand) || ((cars) => name && cars.name === brand) || ((cars) => category_id && cars.category_id === category_id));
        
        return car;
    }
}