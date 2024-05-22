//protocolo http
const http = require("node:http");
const { findAvailablePort } = require("../01-nodejs-basics/05-free-port");

const port = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  res.setHeader("Content-type", "text/html; charset=utf-8");
  if (req.url === "/") {
    res.end("Página de inicio");
  } else if (req.url === "/about") {
    res.end("Pagina About");
  }
};
// El servidor puede recibir un peticion
// devolver una respuesta
const server = http.createServer(processRequest);

findAvailablePort(port).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});
