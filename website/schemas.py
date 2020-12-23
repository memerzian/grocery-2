import marshmallow as ma

class MealSchema(ma.Schema):
    id = ma.fields.Int(dump_only=True)
    name = ma.fields.String()
    rating = ma.fields.Integer()

class MealQueryArgsSchema(ma.Schema):
    name = ma.fields.String()
    rating = ma.fields.Integer()