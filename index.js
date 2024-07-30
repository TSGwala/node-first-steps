import { greet } from "./greet.js";

import { yo } from "./greet.js";

import chalk from 'chalk';

import cowsay from 'cowsay';

console.log(chalk.bgBlue.white(cowsay.say({
    text: greet('Thobani')
})));

import figlet from 'figlet';

figlet ('Hello, Thobani!', function(err, data) {
    if (err) {
        console.log('Something went wrong..');
        console.dir(err);
        return;
    }
    console.log(data);
});

let name = "Thobani";

const styledMessage = chalk.bgRed.black(greet('Thobani'));
console.log(styledMessage)



console.log(greet(name));
console.log(yo('Men-T'));