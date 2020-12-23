from flask import Flask
from flask_smorest import Api
from website import schemas, resources

from website.extensions.database import db

from config import Config

app = Flask(__name__)
app.config.from_object(Config)
api = Api(app)
resources.register_blueprints(api)
db.init_app(app)