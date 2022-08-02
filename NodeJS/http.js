const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello programmer!");
    res.write("How are you?");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is about page");
    res.end();
  } else {
    res.write("Not Found");
    res.end();
  }
});

server.listen(4000);

console.log("Listening the port 4000");
