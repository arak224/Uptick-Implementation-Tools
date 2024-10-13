from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import psycopg2

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://ubb17u5no6dpt2:pf8b343c1d6a5b989881c9fb61f725019bd474baa523bd7139c69f41179470107@c3cj4hehegopde.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d6gqhbhhgchmvp'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    with app.app_context():
        from backend import routes  
        routes.init_routes(app)

        try:
            from backend.models import User
            db.create_all()  # Create database tables for our data models
            print('creted successfully')
        except Exception as e:
            print(f"error: {e}")

    return app