from flask_smorest import Blueprint, abort
from website.schemas import MealQueryArgsSchema, MealSchema, ListSchema, ListQueryArgsSchema
from website.models import Meal, Ingredient, Recipe, Unit
from flask.views import MethodView
from website.extensions.database import db
from website.utils.email import send_email

meal_blueprint = Blueprint(
    'meals', 'meals', url_prefix='/api/1/meals',
    description='Operations on meals'
)

@meal_blueprint.route('/')
class Meals(MethodView):
    @meal_blueprint.arguments(MealQueryArgsSchema, location='query')
    @meal_blueprint.response(200, MealSchema(many=True))
    def get(self, args):
        """List meals"""
        sql = db.session.query(Meal).all()
        return sql

    @meal_blueprint.arguments(MealSchema)
    @meal_blueprint.response(201, MealSchema)
    def post(self, new_data):
        """Add a new meal"""
        item = Meal.create(**new_data)
        return item

@meal_blueprint.route('/<meal_id>')
class MealsById(MethodView):
    @meal_blueprint.response(200, MealSchema)
    def get(self, meal_id):
        """Get meal by ID"""
        try:
            item = Meal.query.get(meal_id)
            if not item:
                raise LookupError()
        except LookupError:
            abort(404, message='Item not found.')
        return item

    @meal_blueprint.arguments(MealSchema)
    @meal_blueprint.response(201, MealSchema)
    def put(self, update_data, meal_id):
        """Update existing meal"""
        try:
            item = Meal.query.get(meal_id)
        except LookupError:
            abort(404, message='Item not found.')
        item.update(update_data)
        item.commit()
        return item

    @meal_blueprint.response(204)
    def delete(self, meal_id):
        """Delete meal"""
        try:
            Meal.delete(meal_id)
        except LookupError:
            abort(404, message='Item not found.')

list_blueprint = Blueprint(
    'lists', 'lists', url_prefix='/api/1/lists',
    description='Operations on grocery lists'
)

@list_blueprint.route('/')
class Lists(MethodView):
    @meal_blueprint.arguments(ListSchema)
    @meal_blueprint.response(201, ListSchema)
    def post(self, list_data):
        """Sends grocery list email to the recipient"""
        send_email(**list_data)
        return list_data

blueprints = [meal_blueprint, list_blueprint]

def register_blueprints(api, blueprints):
    for blueprint in blueprints:
        api.register_blueprint(blueprint)