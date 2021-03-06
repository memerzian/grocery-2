from flask import Flask
from flask_smorest import Api
from website import resources

from website.extensions.database import db
from website.extensions.mail import mail

from config import Config

app = Flask(__name__)
app.config.from_object(Config)

app.static_folder = 'static'
app.template_folder = 'templates'

api = Api(app)
resources.register_blueprints(api, resources.blueprints)
db.init_app(app)
mail.init_app(app)

def register_global_injects(app):
    # For use in jinja templates
    @app.context_processor
    def _inject_globals():
        return dict(
            version=app.config.get('APP_VERSION', '?.?.?')
        )

register_global_injects(app)


from website.views import front_end

