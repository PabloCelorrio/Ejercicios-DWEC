import chalk from "chalk";
import readline from "node:readline";
import {stdin as input, stdout as output} from "node:process";



const rl = readline.createInterface({input, output});

let nombre = "";
rl.question("¿Cuál es tu nombre?\n", (answer) => {
    nombre = answer;

    let edad = "";
    rl.question("¿Cuál es tu edad?\n", (answer) => {
        edad = answer;

        if(edad < 18) {
            console.log(chalk.red("Bienvenido, " + nombre + ". Tienes " + edad + " años de edad."));
         }
         else if(edad >= 18 && edad <= 65) {
            console.log(chalk.green("Bienvenido, " + nombre + ". Tienes " + edad + " años de edad."));
         }
         else {
            console.log(chalk.blue("Bienvenido, " + nombre + ". Tienes " + edad + " años de edad."));
         }
    });
});

