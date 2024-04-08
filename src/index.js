const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

const port = 3000;
server.listen(port, () => {
  console.log("Server is running on port " + port);
});

//servidor estáticos
const staticServer = "./web/dist";
server.use(express.static(staticServer));
