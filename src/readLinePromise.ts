import * as readline from 'node:readline';
// import * as readline from 'node:readline/promises'; // no funciona fins el node 18.
import { stdin as input, stdout as output } from 'node:process';

export async function readLinePromise(textMenu: string): Promise<string> {

    const rl = readline.createInterface({ input, output });

    /**
     * Aquesta sería la versió amb Promise, no funciona fins el node 18.
    
    const answer = await rl.question('What do you think of Node.js? ');

    console.log(`Thank you for your valuable feedback: ${answer}`);
    
    rl.close();
    return rl;

    */
    return new Promise((resolve) => {
        rl.question(textMenu, (answer) => {
            rl.close();
            resolve(answer);
        });
    });

}
