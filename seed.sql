CREATE DATABASE list ;

CREATE TABLE todo (
    id SERIAL NOT NULL,
    task text
);
INSERT INTO todo(task) VALUES ('test');
git add .
git commit -m "update"
git push heroku main