var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
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
  processedLines.map(pl => {
    const first = pl[0].split("");
    const second = pl[1].split("");

    if (second.length > first.length) {
      return console.log("nao encaixa");
    }

    const firstPayload = first.slice(
      first.length - second.length,
      first.length
    );

    if (firstPayload.join("") == pl[1]) console.log("encaixa");
    else console.log("nao encaixa");
  });
}

main();
