// const os = require("os");

// console.log(os.platform());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.cpus());

// const fs = require("fs");

// Synchronous function
// fs.writeFileSync("myfile.txt", "Hello Programmers ");
// fs.appendFileSync("myfile.txt", "How are you?");

// const data = fs.readFileSync("myfile.txt");
// console.log(data.toString());

// asynchronous function
// fs.readFile("myfile.txt", (err, data) => {
//   console.log(data.toString());
// });

// console.log("hello");

const EventEmitter = require("events"); // eventEmitter is class

const emitter = new EventEmitter();

// register a listener for bellRing event
emitter.on("bellRing", (period) => {
  console.log(`We need to run ${period}`);
});

// raise an event
setTimeout(() => {
  emitter.emit("bellRing", "second period ended");
}, 3000);

// or
emitter.emit("bellRing", "go home");

// emitter.emit("bellRing", {
//   period: "first",
//   text: "period ended",
// });
