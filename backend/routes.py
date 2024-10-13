from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from .models import User

def init_routes(app):
    @app.route('/create_user', methods=['POST'])
    def create_user():
        user_data = request.get_json()
        email = user_data.get('email')
        password = user_data.get('password')
        company = user_data.get('company')
        first_name = user_data.get('first_name')
        last_name = user_data.get('last_name')


        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return jsonify({'message': 'User already exists!'}), 409
        
        hashed_password = generate_password_hash(password)

        new_user = User(email=email, password=hashed_password, company=company, first_name=first_name, last_name=last_name)

        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User created successfully!', 'user_id': new_user.id}), 201

    @app.route('/login', methods=['POST'])
    def login():
        login_data = request.get_json()
        email = login_data.get('email')
        password = login_data.get('password')

        user = User.query.filter_by(email=email).first()

        if not user or not check_password_hash(user.password, password):
            return jsonify({'message': 'Invalid email or password!'}), 401

        return jsonify({'message': 'Login successful!'}), 200