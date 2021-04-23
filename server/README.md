# Environment setup
If not already created, create a virtual environment in the server directory using `python3 -m venv env`.  Activate this virtualenv using `source env/bin/activate`.  You should see `(env)` before your command prompt if you've correctly activated the virtualenv.  Then run `pip install -r requirements.txt` to install all of the necessary Python packages for this server, and `pip freeze > requirements.txt` to update the dependencies.

To start the Flask server, run `./start.sh`.  From another terminal, try sending requests using `curl localhost:13162/chat`.