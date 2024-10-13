from . import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.Text(), unique=False, nullable=False)
    company = db.Column(db.String(128), unique=False, nullable=False)
    first_name = db.Column(db.String(50), unique=False, nullable=True)
    last_name = db.Column(db.String(50), unique=False, nullable=True)

    def __repr__(self):
        return f'<User {self.email}>'