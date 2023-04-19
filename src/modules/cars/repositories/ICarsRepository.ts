import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Cars } from "../entities/Cars";

export interface ICarsRepository {
    create(data: ICreateCarDTO): Promise<void>;
    findByLicensePlate(license_plate: string): Promise<Cars>;
    findAvailable(
        brand?: string,
        category_id?: string,
        name?: string
    ): Promise<Cars[]>;
}
