import { createServer } from "http";

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 200;
  res.end("Hello, World!\n");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
