import argparse
import os
import json
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import pickle


app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
CORS(app)

## Model & Meta Data Load

@app.errorhandler(404)
def pageNotFound(error):
    return "page not found"

@app.errorhandler(500)
def raiseError(error):
    return error

@app.route('/')
def query_to_result():
    output = {
        'hello': "world",
    }
    return jsonify(**output)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Flask option arguments')
    parser.add_argument('--host', type=str, default=None, help='Default is localhost')
    parser.add_argument('--port', type=int, default=None, help='Default is :5000')
    args = parser.parse_args() 
    host = args.host
    port = args.port
    app.run(host="0.0.0.0", port=7777)
