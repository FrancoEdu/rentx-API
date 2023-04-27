import { Specification } from "../../entities/Specification";
import {
    ICreateSpecification,
    ISpecificationRepository,
} from "../ISpecificationRepository";

export class SpecificationRepositoryInMemory
    implements ISpecificationRepository
{
    specifications: Specification[];

    async create({
        name,
        description,
    }: ICreateSpecification): Promise<Specification> {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
        });

        this.specifications.push(specification);
        return specification;
    }
    async findByName(name: string): Promise<Specification> {
        const specification = this.specifications.find(
            (spec) => spec.name === name
        );
        return specification;
    }
    async findById(ids: string[]): Promise<Specification[]> {
        const specification = this.specifications.filter((spec) =>
            ids.includes(spec.id)
        );
        return specification;
    }
    async list(): Promise<Specification[]> {
        const specification = this.specifications;
        return specification;
    }
}
