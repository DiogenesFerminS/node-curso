import { readFile } from 'node:fs/promises';

(
    async () => {
        console.log('Leyendo el primer archivo');
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log({textOne: text});

        console.log('---------Acciones entre medias----------')

        console.log('Leyendo el segundo archivo');
        const textTwo = await readFile('./archivo2.txt', 'utf-8')
        console.log({textTwo});
    }
)();

