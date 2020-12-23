Truncate grc.unit, grc.ingredient, grc.meal, grc.recipe;

INSERT INTO grc.unit(id, name)
	VALUES (1, 'Each'),
	(2, 'Tablespoon'),
	(3, 'Cup'),
	(4, 'Clove');

INSERT INTO grc.ingredient (id, name, unit_id)
	VALUES (1, 'Olive Oil', 2),
	(2, 'Farro', 3),
	(3, 'Lemon', 1),
	(4, 'Garlic', 4)
	
INSERT INTO grc.meal(id, name, rating)
	VALUES (1, 'West African Peanut Soup', 5),
	(2, 'Carrots and Tahini', 5),
	(3, 'Veggie Burgers', 5),
	(4, 'Chipolte Salad', 4),
	(5, 'Mexican Quinoa', 5);
	
INSERT INTO grc.recipe(meal_id, ingredient_id, quantity)
	VALUES (1, 1, 1);