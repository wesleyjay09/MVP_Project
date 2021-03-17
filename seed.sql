CREATE DATABASE list ;

CREATE TABLE task (
    id SERIAL NOT NULL,
    task text
);
INSERT INTO task (task) VALUES ('test');
git add .
git commit -m "update"
git push heroku main