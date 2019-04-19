create table products (
    product_id serial primary key not null,
    product_name varchar(100) not null,
    product_price decimal not null,
    image_url varchar(999999) not null
);