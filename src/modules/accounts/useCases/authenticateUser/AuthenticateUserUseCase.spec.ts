import { AppError } from "../../../../error/AppError";
import { ICreateUser } from "../../dtos/ICreateUser";
import { UsersRepositoryInMemory } from "../../repositories/InMemory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {

    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    })


    it("Should be able to authenticate a new user", async() => {
        const user: ICreateUser = {
            name: "Eduardo",
            email: "eduardo.franco24@gmail.com",
            password: "1234",
            driver_license: "0987654321"
        };

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        });

        expect(result).toHaveProperty("token")
    });

    it("Should not be able authenticate nonexistent user", () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "eduardo.franco45467@gmail.com",
                password: "124453467574"
            });
        }).rejects.toBeInstanceOf(AppError)
    });

    it("Should not be able to authenticate with incorrect password", () => {
        expect(async () => {
            const user: ICreateUser = {
                name: "Eduardo",
                email: "eduardo.franco24@gmail.com",
                password: "1234",
                driver_license: "0987654321"
            };

            await createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "123412412"
            });
        }).rejects.toBeInstanceOf(AppError)
    })
})