var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getInput() {
  await rl.question("", num => {
    const size = Number(num);
    let i = 0;
    const input = [];
    rl.on("line", line => {
      i++;
      input.push(line);
      if (i === size) {
        rl.close();
        processInput(input);
      }
    });
  });
}

function processInput(lines) {
  const processedLines = lines.map(line => line.split(" "));
  processedLines.map(line => {
    const sorted = line.sort(function(a, b) {
      return b.length - a.length;
    });
    console.log(sorted.join(" "));
  });
}

(function main() {
  getInput();
})();
