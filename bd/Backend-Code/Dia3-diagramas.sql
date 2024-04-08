CREATE TABLE projects (
id_project INT NOT NULL auto_increment PRIMARY KEY,
name_project VARCHAR(50) NOT NULL,
slogan_project VARCHAR(40) NOT NULL,
description_project TINYTEXT NOT NULL,
technologies_project VARCHAR(30) NOT NULL,
image_project MEDIUMTEXT NOT NULL,
demo_url TEXT NOT NULL,
repo_url TEXT NOT NULL
);

CREATE TABLE author (
id_author INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name_author VARCHAR(30) NOT NULL,
job_author VARCHAR(40) NOT NULL,
photo_author MEDIUMTEXT NOT NULL
);

SELECT author.name_author, projects.name_project
FROM author, projects
WHERE projects.fk_idauthor = author.id_author;