from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://austinrakowski224:SkoDucks1221!!!@localhost/upticktools'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(30), unique=False, nullable=False)
    company = db.Column(db.String(120), unique=False, nullable=False)
    first_name = db.Column(db.String(50), unique=False, nullable=True)
    last_name = db.Column(db.String(50), unique=False, nullable=True)

    def __repr__(self):
        return f'<User {self.email}>'


@app.route('/create_user', methods=['POST'])
def create_user():
        user_data = request.get_json()
        email = user_data.get('email')
        password = user_data.get('password')
        company = user_data.get('company')
        first_name = user_data.get('first_name')
        last_name = user_data.get('last_name')

        new_user = User(email=email, password=password, company=company, first_name=first_name, last_name=last_name)

        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User created successfully!', 'user_id': new_user.id}), 201

@app.route('/login', methods=['POST'])
def login():
     login_data = request.get_json()
     print(login_data)
     email = login_data.get('email')
     password = login_data.get('password')

     user = User.query.filter_by(email=email).first()
    
     if user and check_password_hash(user.password, password):
        # Successful login
        return jsonify({'message': 'Login successful!'}), 200
     else:
        # Invalid login
        return jsonify({'error': 'Invalid email or password.'}), 401
     
     
ç

if __name__ == '__main__':
    app.run(debug=True, port=5000)
