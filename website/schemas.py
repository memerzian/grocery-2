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

class ListItemsSchema(ma.Schema):
    name = ma.fields.String()
    quantity = ma.fields.Integer()
    unit = ma.fields.String()

class ListSchema(ma.Schema):
    recipient = ma.fields.String()
    meals = ma.fields.Nested('MealSchema', many=True)
    list_items = ma.fields.Nested('ListItemsSchema', many=True)

class ListQueryArgsSchema(ma.Schema):
    recipient = ma.fields.String()
    meals = ma.fields.Nested('MealSchema', many=True)
    list_items = ma.fields.Nested('ListItemsSchema', many=True)

class MealQueryArgsSchema(ma.Schema):
    name = ma.fields.String()
    rating = ma.fields.Integer()