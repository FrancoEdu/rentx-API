import { Specification } from "../entities/Specification";

export interface ICreateSpecification {
    name: string;
    description: string;
}

export interface ISpecificationRepository {
    create({ name, description }: ICreateSpecification): Promise<Specification>;
    findByName(name: string): Promise<Specification>;
    findById(ids: string[]): Promise<Specification[]>;
    list(): Promise<Specification[]>;
}
