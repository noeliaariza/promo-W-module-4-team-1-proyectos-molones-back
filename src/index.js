const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const server = express();
const swaggerUI = require("swagger-ui-express");
const swaggerConfig = require("./swagger.json");

require("dotenv").config();

server.set("view engine", "ejs");

server.use(cors());
server.use(express.json({ limit: "25mb" }));

const getDBConnection = async () => {
  const connection = await mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_noelia_admin",
    password: process.env.PASSWORD_DB,
    database: "freedb_team1-proyectos-molones",
  });
  connection.connect();
  return connection;
};

const port = 3000;
server.listen(port, () => {
  console.log("Server is running on port " + port);
});

server.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerConfig));

server.get("/detail/:id_project", async (req, res) => {
  const { id_project } = req.params;
  const connection = await getDBConnection();
  const sql = `SELECT * FROM projects, author WHERE fk_idauthor = id_author AND id_project = ?`;
  const [result] = await connection.query(sql, [id_project]);

  connection.end();

  res.render("detail", { project: result[0] });
  console.log(result[0]);
});

server.get("/projectlist", async (req, res) => {
  const connection = await getDBConnection();
  const sql = `SELECT author.name_author, author.job_author, author.photo_author, projects.name_project, projects.slogan_project, projects.description_project, projects.technologies_project, projects.image_project, projects.demo_url, projects.repo_url
  FROM author, projects
  WHERE projects.fk_idauthor = author.id_author;`;
  const [projectlistResult] = await connection.query(sql);
  connection.end();

  res.status(200).json({
    status: "success",
    message: projectlistResult,
  });
});
server.post("/newproject", async (req, res) => {
  const connection = await getDBConnection();

  const authorQuerySQL = `INSERT INTO author (name_author, job_author, photo_author) VALUES (?, ?, ?)`;

  const [authorResult] = await connection.query(authorQuerySQL, [
    req.body.autor,
    req.body.job,
    req.body.photo,
  ]);

  const projectQuerySQL = `INSERT INTO projects (name_project, slogan_project, description_project, technologies_project, image_project, demo_url, repo_url, fk_idauthor) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;

  const [projectResult] = await connection.query(projectQuerySQL, [
    req.body.name,
    req.body.slogan,
    req.body.desc,
    req.body.technologies,
    req.body.image,
    req.body.demo,
    req.body.repo,
    authorResult.insertId,
  ]);
  res.status(201).json({
    success: true,
    id: projectResult.insertId,
    url: `${process.env.URL}/detail/${projectResult.insertId}`,
    message: "Todo correcto. Petuardo te quiere.",
  });
});

//servidor estáticos
const staticServer = "./src/public-react";
server.use(express.static(staticServer));

//servidor estático css
const pathServerPublicStyles = "./src/public-css";
server.use(express.static(pathServerPublicStyles));

server.use(express.static("public"));
