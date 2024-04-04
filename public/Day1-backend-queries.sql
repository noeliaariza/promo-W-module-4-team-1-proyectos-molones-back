
CREATE TABLE infoproject (
  project_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  slogan VARCHAR(45) NOT NULL,
  repo TINYTEXT NOT NULL,
  demo TINYTEXT NOT NULL,
  technologies VARCHAR(45) NOT NULL,
  `desc` TINYTEXT NOT NULL,
  autor VARCHAR(45) NOT NULL,
  job VARCHAR(45) NOT NULL,
  image MEDIUMTEXT NOT NULL,
  photo MEDIUMTEXT NOT NULL,
  PRIMARY KEY (project_id)
);

INSERT INTO infoproject (name, slogan, repo, demo, technologies, `desc`, autor, job, image, photo)
VALUES
('Tienda online' , 'molamos', 'https://google.com', 'https://google.com', 'HTML - CSS- REACT', 'hola que tal', 'Mari Carmen', 'graphic designer', 'https://elcomercio.pe/resizer/tNDAoQRl3EyvWsNjEAQQQKVP2CA=/680x680/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VW3JWJ4AB5FK3F3MZUPOZX3WOM.jpg', 'https://elcomercio.pe/resizer/tNDAoQRl3EyvWsNjEAQQQKVP2CA=/680x680/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VW3JWJ4AB5FK3F3MZUPOZX3WOM.jpg'),
('Tienda online' , 'molamos', 'https://google.com', 'https://google.com', 'HTML - CSS- REACT', 'hola que tal', 'Mari Carmen', 'graphic designer', 'https://elcomercio.pe/resizer/tNDAoQRl3EyvWsNjEAQQQKVP2CA=/680x680/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VW3JWJ4AB5FK3F3MZUPOZX3WOM.jpg', 'https://elcomercio.pe/resizer/tNDAoQRl3EyvWsNjEAQQQKVP2CA=/680x680/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VW3JWJ4AB5FK3F3MZUPOZX3WOM.jpg'),
('Tienda online' , 'molamos', 'https://google.com', 'https://google.com', 'HTML - CSS- REACT', 'hola que tal', 'Mari Carmen', 'graphic designer', 'https://elcomercio.pe/resizer/tNDAoQRl3EyvWsNjEAQQQKVP2CA=/680x680/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VW3JWJ4AB5FK3F3MZUPOZX3WOM.jpg', 'https://elcomercio.pe/resizer/tNDAoQRl3EyvWsNjEAQQQKVP2CA=/680x680/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VW3JWJ4AB5FK3F3MZUPOZX3WOM.jpg');