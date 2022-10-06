const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "Logs");

try {
  fs.mkdirSync("Logs");
} catch {
  console.log("Directory already exists");
}

process.chdir("./Logs");
console.log("Working directory now is: " + process.cwd());

const length = fs.readdirSync(dirPath).length;

if (length > 0)
  for (let y = 0; y < length; y++) {
    fs.unlink(`log${y}.txt`, function (err) {
      if (err) throw err;
      console.log(`delete files...log${y}.txt`);
    });
  }
else console.log("Directory is Empty");

for (let x = 0; x < 10; x++) {
  fs.writeFileSync(dirPath + `/Log${x}.txt`, `This is log${x}`);
  console.log(`log${x}.txt`);
}
