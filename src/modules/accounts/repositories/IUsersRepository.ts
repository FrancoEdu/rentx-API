import { ICreateUser } from "../dtos/ICreateUser";
import { User } from "../entities/User";

export interface IUserRepository {
    create(data: ICreateUser): Promise<void>;
    findUserEmail(email: string): Promise<User>;
    findByID(userID: string): Promise<User>;
}

export { ICreateUser };
