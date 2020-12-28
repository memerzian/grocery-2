"""Email server"""


from flask_mail import Mail

mail = Mail()

def init_app(app):
    """Initialize relational database extension"""
    mail.init_app(app)
