CREATE TABLE users (
    user_id serial PRIMARY KEY,
    username VARCHAR (50),
    password VARCHAR (50)
);

CREATE TABLE comments ( 
    comment_id serial PRIMARY KEY,
    user_id serial REFERENCES users (user_id),
    page_id VARCHAR (50),
    comment_value VARCHAR (1000)
);