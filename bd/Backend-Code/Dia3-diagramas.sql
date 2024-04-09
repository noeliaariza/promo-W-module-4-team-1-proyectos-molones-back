SELECT * FROM `freedb_team1-proyectos-molones`.author;
SELECT author.name_author, author.job_author, author.photo_author, projects.name_project, projects.slogan_project, projects.description_project, projects.technologies_project, projects.image_project, projects.demo_url, projects.repo_url
FROM author, projects
WHERE projects.fk_idauthor = author.id_author;
SELECT * FROM projects;