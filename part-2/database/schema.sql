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
	name VARCHAR(20),
	section VARCHAR(20),
	price NUMERIC(2,4)
	);

DROP TABLE IF EXISTS orders;

CREATE TABLE orders(
	id SERIAL PRIMARY KEY,
	cust_id INTEGER,
	cart VARCHAR
	);
