const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const server = express();

server.use(cors());

const getDBConnection = async() => {  
  const connection = await mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_noelia_admin",
    password: "3!FaVAnvA6ex4*h",
    database: "freedb_team1-proyectos-molones", 
  })
  connection.connect();
  return connection;
}

const port = 3000;
server.listen(port, () => {
  console.log("Server is running on port " + port);
});

server.get("/projectlist", async(req, res)=> {
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
//servidor estáticos
const staticServer = "./web/dist";
server.use(express.static(staticServer));

