import { AppError } from "../../../../error/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

// Testes unitários

let createCategoryUseCase: CreateCategoryUseCase
let createCategoryInMemory: CategoriesRepositoryInMemory

describe("Create category", () => {

    beforeEach(()=>{
        createCategoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(createCategoryInMemory);
    });

    it("Should be able to create a new category", async () => {
        const category = {
            name: "Test",
            description: "Description test"
        };

        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description
        });

        const verifyIfCategoryWasCreated = await createCategoryInMemory.findByName(category.name);

        expect(verifyIfCategoryWasCreated).toHaveProperty("id")
    });

    it("Should not be able to create the same category", async() => {
        expect(async() => {
            const category = {
                name: "Test",
                description: "Description test"
            };
    
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            });
    
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            });
    
        }).rejects.toBeInstanceOf(AppError)
    })
});







//Exemplo de Uso
// describe("Criar uma categoria", () => { //agrupar teste
//     it("Espero que 2 + 2 seja 4", () => { //it = qual o teste, dentro uma descrição, 
//         const soma = 2+2;
//         const result = 4;

//         expect(soma).toBe(result)
//     })
// })