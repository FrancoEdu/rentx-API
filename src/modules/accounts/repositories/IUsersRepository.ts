import { ICreateUser } from "../dtos/ICreateUser";
import { User } from "../entities/User";

export interface IUserRepository{
    create(data: ICreateUser): Promise<void>
}

export { ICreateUser };
