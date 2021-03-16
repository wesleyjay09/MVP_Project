CREATE DATABASE list ;

CREATE TABLE task (
    id SERIAL NOT NULL,
    task text,
    satus boolean NOT NULL
);