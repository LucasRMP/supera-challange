var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  let i = 0;
  const items = [];
  rl.on("line", line => {
    items.push(Number(line) <= 10 ? line : null);

    i++;
    if (i === 100) {
      processInput(items);
      rl.close();
    }
  });
}

function processInput(items) {
  for (let i = 0; i < items.length; i++) {
    if (items[i]) {
      console.log(`X[${i}] = ${parseFloat(items[i]).toFixed(1)}`);
    }
  }
}

main();
