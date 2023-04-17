import { Repository, getRepository } from "typeorm";

import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Cars } from "../../entities/Cars";
import { ICarsRepository } from "../ICarsRepository";

export class CarsRepository implements ICarsRepository {
    private repository: Repository<Cars>;

    constructor() {
        this.repository = getRepository(Cars);
    }

    async create({
        brand,
        category_id,
        daily_rate,
        description,
        fine_amount,
        license_plate,
        name,
    }: ICreateCarDTO): Promise<Cars> {
        const car = this.repository.create({
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            license_plate,
            name,
        });

        await this.repository.save(car);

        return car;
    }

    async findByLicensePlate(license_plate: string): Promise<Cars> {
        const licensePlate = await this.repository.findOne({ license_plate });
        return licensePlate;
    }
}
