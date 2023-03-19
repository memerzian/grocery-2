DROP SCHEMA IF EXISTS grc CASCADE;
CREATE SCHEMA grc;


DROP TABLE IF EXISTS grc.unit CASCADE;

CREATE TABLE grc.unit
(
    id SERIAL NOT NULL PRIMARY KEY,
    name character varying(64) COLLATE pg_catalog."default"
);

DROP TABLE IF EXISTS grc.ingredient CASCADE;

CREATE TABLE grc.ingredient
(
    id SERIAL NOT NULL PRIMARY KEY,
    name character varying(64) COLLATE pg_catalog."default",
    unit_id integer,
    aisle integer,
    CONSTRAINT ingredient_unit_id_fkey FOREIGN KEY (unit_id)
        REFERENCES grc.unit (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

DROP TABLE IF EXISTS grc.meal CASCADE;

CREATE TABLE grc.meal
(
    id SERIAL NOT NULL PRIMARY KEY,
    name character varying(64) COLLATE pg_catalog."default",
    rating integer
);

DROP TABLE IF EXISTS grc.recipe CASCADE;

CREATE TABLE grc.recipe
(
    id SERIAL NOT NULL PRIMARY KEY,
    meal_id integer,
    ingredient_id integer,
    quantity integer,
    CONSTRAINT recipe_ingredient_id_fkey FOREIGN KEY (ingredient_id)
        REFERENCES grc.ingredient (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT recipe_meal_id_fkey FOREIGN KEY (meal_id)
        REFERENCES grc.meal (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

INSERT INTO grc.unit(name)
	VALUES ('Each'),
	('Tablespoon'),
	('Cup'),
	('Clove');

INSERT INTO grc.ingredient (name, unit_id, aisle)
	VALUES ('Olive Oil', 2, 3),
	('Farro', 3, 3),
	('Lemon', 1, 1),
	('Garlic', 4, 1);
	
INSERT INTO grc.meal(name, rating)
	VALUES ('West African Peanut Soup', 5),
	('Carrots and Tahini', 5),
	('Veggie Burgers', 5),
	('Chipolte Salad', 4),
	('Mexican Quinoa', 5),
	('Thai Peanut', 5),
	('Lasagna Soup', 5),
	('Mojo bowls', 5),
	('Moroccan Butternut Coucous Stew', 4),
	('Roasted Vegetable Tangine', 5),
	('Breakfast Burritos', 5),
	('Enchiladas', 5);
	
	