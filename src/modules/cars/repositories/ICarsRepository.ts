import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Cars } from "../entities/Cars";

export interface ICarsRepository {
    create(data: ICreateCarDTO): Promise<void>;
    findByLicensePlate(license_plate: string): Promise<Cars>;
}
