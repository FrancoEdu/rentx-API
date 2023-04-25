import { Specification } from "../entities/Specification";

export interface ICreateCarDTO {
    name: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
    specifications?: Specification[];
}
