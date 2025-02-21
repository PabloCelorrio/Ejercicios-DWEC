import os from "os";

/* Ejercicio 1 */

let hostname = os.hostname();
let version = os.version();
let memoria = os.freemem();

console.log("Hostname: " + hostname);
console.log("Versión: " + version);
console.log("Memoria disponible: " + memoria + " bytes");

let cpus = os.cpus();
console.log("CPU: " + cpus[0].model);

/* Ejercicio 2 */

import fs from "fs";

let contenido = "Hostname: " + hostname +"\nVersión: " + version + "\nMemoria disponible: " + memoria + " bytes" + "\nCPU: " + cpus[0].model;

try {

    fs.writeFileSync("./info_sistema.txt", contenido);

}catch(Exception) {

    console.log("Ha ocurrido un error al guardar la información en el archivo.");

}

/* Ejercicio 3 */

fs.readFile('./info_sistema.txt', (err, data) => {

    if(err)
        console.log("Ha ocurrido un error al leer la información del archivo. " + err);
    else
        console.log(data.toString());
});


    
