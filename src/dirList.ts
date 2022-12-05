import { readdir } from 'node:fs/promises';

export async function dirList(dir: string) {
    try {
        const files = await readdir(dir);
        console.log('Listing of', dir, ':');
        console.log('===================================');
        files.forEach(function (file: string) {
            console.log(file);
        });
    } catch (err) {
        console.error(`Se produjo el siguiente error al leer el directorio <${dir}>: ${err}`);
    }
}
