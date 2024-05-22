//protocolo http
const http = require("node:http");
const { findAvailablePort } = require("../01-nodejs-basics/04-http");

const port = process.env.PORT ?? 1234;

// El servidor puede recibir un peticion
// devolver una respuesta
const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo");
});

findAvailablePort(port).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});
