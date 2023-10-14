#!/usr/bin/env node
//import * as readline from 'node:readline/promises';
/*import {
    stdin as input,
    stdout as output,
} from 'node:process';*/
const readline = require('node:readline/promises');
const {
    stdin: input,
    stdout: output,
} = require('node:process');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const number =  getRandomInt(0, 100);
const rl = readline.createInterface({ input, output });

rl.question(
    'Загадано число в диапазоне от 0 до 100', (answer) => {
        if(answer > number){
            console.log("Меньше");
        }else if(answer < number){
            console.log("Больше");
        } else {
            console.log(
                `Отгадано число: ${answer}`
            ); 
            rl.close();
        }
    }
);


