DROP DATABASE IF EXISTS grocery_store;

CREATE DATABASE grocery_store

\c grocery_store

DROP TABLE IF EXISTS shoppers;

CREATE TABLE shoppers(
	id SERIAL PRIMARY KEY,
	name VARCHAR(20)
);

DROP TABLE IF EXISTS products;

CREATE TABLE products(
	id SERIAL PRIMARY KEY,
	name VARCHAR(20),
	section VARCHAR(20),
	price NUMERIC(4,2)
);

DROP TABLE IF EXISTS orders;

CREATE TABLE orders(
	id SERIAL PRIMARY KEY,
	cust_id INTEGER,
	cart INTEGER
);

COPY products(name, price, section)
FROM '/Users/hellaboredguy/documents/projects/phase-3-challenge/part-2/database/grocery.csv' DELIMITER ',' CSV HEADER;

SELECT c.*, s.name, p.price FROM cart as c
INNER JOIN shoppers as s on s.id = c.shopper
INNER JOIN products as p on p.id = c.product

SELECT s.name, SUM(p.price) as price FROM cart as c
INNER JOIN shoppers as s on s.id = c.shopper
INNER JOIN products as p on p.id = c.product
GROUP BY s.name
