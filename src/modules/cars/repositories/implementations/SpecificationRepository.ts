import { Repository, getRepository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository, ICreateSpecification } from "../ISpecificationRepository";


export class SpecificationRepository implements ISpecificationRepository{
    
    private repository: Repository<Specification>

    constructor(){
        this.repository = getRepository(Specification)
    }

    async create({ name, description }: ICreateSpecification): Promise<void> {
        const specification = this.repository.create({
            name,
            description
        })

       await this.repository.save(specification)
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({name})
        return specification
    }

    list(): Promise<Specification[]>{
        const specification = this.repository.find()
        return specification
    }
}