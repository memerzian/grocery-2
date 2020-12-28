from flask_mail import Message
from website.extensions.mail import mail

import datetime

def send_email(recipient, list_items, meals):
    recipients = [recipient]
    message = Message('Grocery list', sender='grocerylistsender@gmail.com', recipients=recipients)
    message.body = 'text body test'
    html_message = f'<h4>Grocery list for {datetime.datetime.now():%Y-%m-%d}</h4>'
    html_message += '<h6>Meals</h6><ul>'
    for meal in meals:
        html_message += f"<li>{meal.get('name')}</li>"
    html_message += '</ul><h6>Ingredients</h6><ul>'
    for item in list_items:
        html_message += f"<li>{item.get('name')} x{item.get('quantity')} {item.get('unit')}</li>"
    html_message += '</ul>'
    message.html = html_message
    mail.send(message)