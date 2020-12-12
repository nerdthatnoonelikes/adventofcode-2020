const fs = require("fs");

const lines = fs.readFileSync("input.txt", "utf8").split("\n");
let validCounter = 0;
for (const x of lines) {
    const data = x.split(" ");
    const rule = data[0];
    const min = parseInt(rule.split("-")[0]);
    const max = parseInt(rule.split("-")[1]);
    const letter = data[1].slice(0, 1);
    const password = data[2];

    let appearance = 0;
 
    for (let i = 0; i < password.length; i++) {
        if (password[i] === letter) {
            appearance++;
        }
    }

    if (appearance >= min && appearance <= max) {
        validCounter++;
    }

}
console.log(`There are ${validCounter} valid passwords`)