import fs from "fs";

export const deleteFile = async (filename: string) => {
    try {
        await fs.promises.stat(filename); // verifica se existe
        // eslint-disable-next-line no-empty
    } catch (error) {}

    await fs.promises.unlink(filename); // apaga se existir
};
