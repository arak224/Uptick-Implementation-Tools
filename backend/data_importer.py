import pandas as pd 
import requests

auth_token = ''
def get_authtoken(username, pw):
    global authtoken
    url = 'https://api.servicetrade.com/api/auth'
    headers = [{'Content-Type' : 'application/json'}]
    data = [{
        'username' : username, 
        'password' : pw
         }]
    response = requests.post(url=url, headers=headers, json=data)
    return response.json()


def get_clients(authtoken=auth_token):
    url = 'https://api.servicetrade.com/api/company'
    headers = [{
        'Content-Type' : 'application/json', 
        'Cookie' : 'PHPSESSID={authtoken}'
        }]
    response = requests.get(url=url, headers=headers)
    return response.json()



clients_mandatory_fields = ['name', 'is_active', 'contact_address']
clients = pd.DataFrame(columns=[ 
    'name', 
    'ref', 
    'is_active', 
    'contact_address', 
    'contact_mobile', 
    'tags',
    'notes', 
    ])
client_data = get_clients()

properties_mandatory_fields = ['name', 'address', 'status', 'client', ]







