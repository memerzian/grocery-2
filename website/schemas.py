import marshmallow as ma

class UnitSchema(ma.Schema):
    id = ma.fields.Int(dump_only=True)
    name = ma.fields.String()

class IngredientSchema(ma.Schema):
    id = ma.fields.Int(dump_only=True)
    name = ma.fields.String()
    unit = ma.fields.Nested('UnitSchema', dump_only=True)

class RecipeSchema(ma.Schema):
    id = ma.fields.Int(dump_only=True)
    ingredient = ma.fields.Nested('IngredientSchema', dump_only=True)
    quantity = ma.fields.Integer()

class MealSchema(ma.Schema):
    id = ma.fields.Int(dump_only=True)
    name = ma.fields.String()
    rating = ma.fields.Integer()
    recipes = ma.fields.Nested('RecipeSchema', dump_only=True, many=True)

class MealQueryArgsSchema(ma.Schema):
    name = ma.fields.String()
    rating = ma.fields.Integer()