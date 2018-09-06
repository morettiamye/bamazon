create database bamazon_db;

use bamazon_db;

create table products (
   item_id integer auto_increment not null,
   product_name varchar(50) not null,
   department_name varchar(50) not null,
   price integer (8) not null,
   stock_quantity integer (4) not null,
   primary_key(item_id)
);

iinsert into products (product_name, department_name, price, stock_quantity)
values ("PlayStation 4", 'electronics', 300, 25),
("Cat Phone Case", "electronics", 15, 10),
("Dog Phone Case", "electronics", 15, 10),
("Xbox 360", "electronics", 300, 10),
("Nintendo Switch", "electronics", 300, 10),
("Rabbit Phone Case", "electronics", 15, 10), 
("Pokemon Game", "video games", 40, 3),
("Pokemon Phone Case", "electronics", 20, 4),
("Rilakkuma Phone Case", "electronics", 20, 8),
("Korilakkuma Phone Case", "eletronics", 20, 2)