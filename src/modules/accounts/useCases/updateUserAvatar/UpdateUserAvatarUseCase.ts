// adicionar coluna avatar na tabela user
// Refatorar usuário com coluna avatar
// Configuração upload multer
// Criar regra de negócio do upload
// Criar controller

import { inject, injectable } from "tsyringe";

import { deleteFile } from "../../../../utils/file";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
export class UpdateUserAvatarUsecase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ) {}

    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const user = this.usersRepository.findByID(user_id);

        if ((await user).avatar) {
            await deleteFile(`./tmp/avatar/${(await user).avatar}`);
        }

        (await user).avatar = avatar_file;

        await this.usersRepository.create(await user);
    }
}
