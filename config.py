import os

from dotenv import load_dotenv

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(BASE_DIR, '.env'))

class Config(object):
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    SQLALCHEMY_DATABASE_URI=os.getenv('SQLALCHEMY_DATABASE_URI')
    API_TITLE='Grocery API'
    API_VERSION='v1'
    APP_VERSION='1.0.0'
    OPENAPI_VERSION='3.0.2'
    OPENAPI_URL_PREFIX='/doc'
    OPENAPI_SWAGGER_UI_PATH='/swagger'
    OPENAPI_SWAGGER_UI_URL="https://cdn.jsdelivr.net/npm/swagger-ui-dist/"
    SQLALCHEMY_TRACK_MODIFICATIONS=False
    FLASK_ENV='development'
    MAIL_SERVER='smtp.googlemail.com'
    MAIL_PORT=587
    MAIL_USE_TLS=1
    MAIL_USERNAME=os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD=os.getenv('MAIL_PASSWORD')