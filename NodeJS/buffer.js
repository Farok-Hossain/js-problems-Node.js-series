const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf8");

ourReadStream.on("data", (data) => {
  console.log(data);
});

const ourReadStream2 = fs.createReadStream(`${__dirname}/bigdata.txt`);

ourReadStream2.on("data", (chunk) => {
  console.log(chunk.toString());
});
