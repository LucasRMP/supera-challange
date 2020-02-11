var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  let i = 0;
  const items = [];
  rl.on("line", line => {
    items.push(line == "" || line < 0 ? "1" : line);
    i++;
    if (i === 10) {
      processInput(items);
      rl.close();
    }
  });
}

function processInput(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`X[${i}] = ${items[i]}`);
  }
}

main();
