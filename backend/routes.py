from flask import request, jsonify
import bcrypt
from . import db
from .models import User
from .vitally import customerAccounts

def init_routes(app):
    @app.route('/create_user', methods=['POST'])
    def create_user():
        user_data = request.get_json()
        
        # Validate input
        required_fields = ['email', 'password', 'company', 'first_name', 'last_name']
        for field in required_fields:
            if field not in user_data:
                return jsonify({'message': f'Missing field: {field}'}), 400

        email = user_data['email']
        password = user_data['password']
        company = user_data['company']
        first_name = user_data['first_name']
        last_name = user_data['last_name']

        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return jsonify({'message': 'User already exists!'}), 409
        
        # Hash the password (ensure it's in bytes)
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        
        # Create new user (store the hashed password as bytes)
        new_user = User(
            email=email,
            password=hashed_password.decode('utf-8'),  # Decode bytes to string before storing
            company=company,
            first_name=first_name,
            last_name=last_name
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User created successfully!', 'user_id': new_user.id}), 201

    @app.route('/login', methods=['POST'])
    def login():
        login_data = request.get_json()
        
        # Validate input
        if 'email' not in login_data or 'password' not in login_data:
            return jsonify({'message': 'Missing email or password!'}), 400

        email = login_data['email']
        password = login_data['password']

        user = User.query.filter_by(email=email).first()

        if not user or not bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):  # Encode stored password
            return jsonify({'message': 'Invalid email or password!'}), 401
        
        print(user.company)

        return jsonify({'message': 'Login successful!', 'company': user.company}), 200
    
    @app.route('/get_accounts', methods=['GET', 'POST'])
    def give_accounts():
        accounts = customerAccounts
        return jsonify(accounts), 200

