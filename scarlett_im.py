from flask import Flask, render_template
from datetime import date


application = Flask(__name__)


def cal_age():
    birthday = date(year=1994, month=2, day=14)
    today = date.today()
    return today.year - birthday.year - ((today.month, today.day) < (birthday.month, birthday.day))


@application.route('/')
def home():
    return render_template('home.html', age=cal_age())
