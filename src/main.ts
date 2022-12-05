/**
 *  Sense extensió dona ERR_MODULE_NOT_FOUND al executar, que no al compilar. 
 *  Curiosament el font es dirList.ts però el import no dona error al compilar.
 *  Perque funcionin els import i no els require, cal la entrada <"type": "module",> al 1r nivell del package.json
 */
import { dirList } from './dirList.js';
import { readLinePromise } from './readLinePromise.js';

init();

/** Inicio */
async function init(): Promise<any> {

    let dir: string = process.argv[2] || process.env.HOME || '.';
    let extension = process.argv[3];

    /** Variables iniciales */
    console.log('Variables iniciales:');
    console.log('===================================');
    console.log(`process.env.HOME: ${process.env.HOME}`);
    console.log(`process.argv[1]: ${process.argv[1]}`);
    console.log(`dir (argv[1]): ${process.argv[2]}`);
    console.log(`extension (argv[2]): ${process.argv[3]}`);
    console.log('');

    /** Listar directorio */
    await dirList(dir);

    /** Capturar teclat */
    let escrit: string = 'Vaaaa';
    escrit = await readLinePromise('Escriu quelcom al teclat, coi! -> ');
    console.log(`Has escrit <${escrit}>`);

}





