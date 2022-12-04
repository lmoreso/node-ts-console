let listdirectory = require('./listdirectory');
let dir = process.argv[2] || getUserHome();
let extension = process.argv[3];

let miNombre = 'Desconocido por ahora';

console.log("Escribe tu nombre:");
const stdin = process.openStdin();

stdin.addListener("data", (data) => {
    console.log("Tu nombre es: " + data.toString());
    //process.exit();
})

console.log(`Mi nombre: ${miNombre}`);
console.log(`process.env.HOME: ${process.env.HOME}`);
console.log(`process.env.HOMEPATH: ${process.env.HOMEPATH}`);
console.log(`process.env.USERPROFILE: ${process.env.USERPROFILE}`);
console.log(`process.argv[1]: ${process.argv[1]}`);
console.log(`dir: ${process.argv[2]}`);
console.log(`extension: ${process.argv[3]}`);

listdirectory(dir, extension, function(err: any, list: string[]) {
    if (err) {
        return console.error('Error occurred:', err);
    }

    console.log('Listing of', dir, ':');
    console.log('===================================');
    list.forEach(function(file: string) {
        console.log(file);
    });
});

function getUserHome() {

    return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}
