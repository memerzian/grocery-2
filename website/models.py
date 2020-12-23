from website.extensions.database import db

class Unit(db.Model):
    __tablename__ =  'unit'
    __table_args__ = ({"schema": 'grc'})

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    ingredients = db.relationship('Ingredient', backref='author', lazy='dynamic')

class Ingredient(db.Model):
    __tablename__ =  'ingredient'
    __table_args__ = ({"schema": 'grc'})

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    unit_id = db.Column(db.Integer, db.ForeignKey('grc.unit.id'))

    unit = db.relationship('Unit', back_populates="ingredients")
    recipes = db.relationship('Recipe', back_populates="ingredient")

    def to_dict(self):
        data = {
            'id': self.id,
            'name': self.name,
            'unit': self.unit.name
        }
        return data

class Meal(db.Model):
    __tablename__ =  'meal'
    __table_args__ = ({"schema": 'grc'})

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    rating = db.Column(db.Integer)

    recipes = db.relationship('Recipe', back_populates="meal")

class Recipe(db.Model):
    __tablename__ =  'recipe'
    __table_args__ = ({"schema": 'grc'})

    id = db.Column(db.Integer, primary_key=True)
    meal_id = db.Column(db.Integer, db.ForeignKey('grc.meal.id'))
    ingredient_id = db.Column(db.Integer, db.ForeignKey('grc.ingredient.id'))
    quantity = db.Column(db.Integer)

    meal = db.relationship('Meal', back_populates="recipes")
    ingredient = db.relationship('Ingredient', back_populates="recipes")

    def to_dict(self):
        data = {
            'id': self.id,
            'mealName': self.meal.name,
            'ingredientName': self.ingredient.name,
            'quantity': self.quantity,
            'unit': self.ingredient.unit.name
        }
        return data

    

