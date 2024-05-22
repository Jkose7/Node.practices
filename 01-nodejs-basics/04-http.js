//protocolo http
const http = require("node:http");
const { findAvailablePort } = require("./05-free-port");

// El servidor puede recibir un peticion
// devolver una respuesta

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo");
});

findAvailablePort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});
