import fs from 'node:fs/promises';
import path from 'node:path';
import pc from 'picocolors';

const folder = process.argv[2] ?? '.';

async function ls(folder) {
    let files;
    try{
        files = await fs.readdir(folder);
    } catch{
        console.log(pc.red(`No se pudo leer el directorio ${folder}`));
        process.exit(1);
    };

    const filesPromises = files.map(async file =>{
        const filePath = path.join(folder, file);
        let stats;

        try {
            stats = await fs.stat(filePath); // file info

        } catch (error) {
            // throw new Error(error)
        };

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'D' : 'F';
        const fileSize = stats.size.toString();
        const fileModified = stats.atime.toLocaleString();

        return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModified)}`;
    });

    const filesInfo = await Promise.all(filesPromises);
    filesInfo.forEach(f => console.log(f));
};

ls(folder);