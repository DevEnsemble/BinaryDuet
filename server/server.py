#!/usr/bin/python3

from flask import Flask
import datetime


app = Flask(__name__)


@app.route('/chat', methods=['GET'])
def config():
    return ' Hello World at ' + str(datetime.datetime.now()) + '\n'