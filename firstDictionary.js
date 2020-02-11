var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

function main() {
  const words = [];
  for (let l of lines) {
    l.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
      .toLowerCase()
      .split(" ")
      .map(word => {
        if (!words.includes(word)) {
          words.push(word);
        }
      });
  }

  words.sort();
  console.log(words.join("\n"));
}

main();
