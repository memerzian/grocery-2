from flask_smorest import Blueprint, abort
from website.schemas import MealQueryArgsSchema, MealSchema
from .models import Meal, Ingredient, Recipe, Unit
from flask.views import MethodView
from website.extensions.database import db

blp = Blueprint(
    'meals', 'meals', url_prefix='/api/1/meals',
    description='Operations on meals'
)

@blp.route('/')
class Meals(MethodView):
    @blp.arguments(MealQueryArgsSchema, location='query')
    @blp.response(MealSchema(many=True))
    def get(self, args):
        """List meals"""
        sql = db.session.query(Meal).all()
        return sql

    @blp.arguments(MealSchema)
    @blp.response(MealSchema, code=201)
    def post(self, new_data):
        """Add a new meal"""
        item = Meal.create(**new_data)
        return item

@blp.route('/<meal_id>')
class MealsById(MethodView):
    @blp.response(MealSchema)
    def get(self, meal_id):
        """Get meal by ID"""
        try:
            item = Meal.query.get(meal_id)
            if not item:
                raise LookupError()
        except LookupError:
            abort(404, message='Item not found.')
        return item

    @blp.arguments(MealSchema)
    @blp.response(MealSchema)
    def put(self, update_data, meal_id):
        """Update existing meal"""
        try:
            item = Meal.query.get(meal_id)
        except LookupError:
            abort(404, message='Item not found.')
        item.update(update_data)
        item.commit()
        return item

    @blp.response(code=204)
    def delete(self, meal_id):
        """Delete meal"""
        try:
            Meal.delete(meal_id)
        except LookupError:
            abort(404, message='Item not found.')

def register_blueprints(api):
    api.register_blueprint(blp)