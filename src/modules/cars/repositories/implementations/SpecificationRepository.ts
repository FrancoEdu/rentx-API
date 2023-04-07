import { Repository, getRepository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository, ICreateSpecification } from "../ISpecificationRepository";


export class SpecificationRepository implements ISpecificationRepository{
    
    private specifications: Repository<Specification>

    constructor(){
        this.specifications = getRepository(Specification)
    }

    async create({ name, description }: ICreateSpecification): Promise<void> {
        const specification = this.specifications.create({
            name,
            description
        })

       await this.specifications.save(specification)
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.specifications.findOne({name})
        return specification
    }

    list(): Promise<Specification[]>{
        const specification = this.specifications.find()
        return specification
    }
}