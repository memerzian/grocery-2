# grocery-2
Second iteration of grocery application


When downloading psycopg2, make sure to install the binary version: pip3 install psycopg2-binary


Had to generate an app password for this account: 
https://stackoverflow.com/questions/37058567/configure-flask-mail-to-use-gmail


ssh into raspberry pi (ssh pi@ip address. Note: had to update firmware on router to make this work). Use pw for raspberry pi

1) Install prereqs (sudo apt-get install python3 python3-pi python3-venv nodejs npm postgresql libpq-dev postgresql-client)
2) Install python prereqs (pip3 install gunicorn flask)
3) Create app directory (sudo mkdir app)
4) Add "grocery-lister" as system user (sudo adduser --system --group grocery-lister --shell /bin/bash)
5) Change ownership for app directory to user (sudo chown -R grocery-lister:grocery-lister /app)
6) Switch to grocery-lister user `sudo su grocery-lister`
7) Generate ssh key and add to ssh agent for git: https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
8) Add as a deploy key in git. Repo > settings > deploy key. Copy public key
9) Create repo in app directory (mkdir repo)
10) Clone git repository in that directory: (git clone [link from repository])
11) Create a virtual environment `python3 -m venv venv`
12) Activate it `venv/bin/activate`
13) Install all requirements `pip3 install -r requirements.txt`
- Upgrade python on raspberry pi if having issues installing reqs b/c python version is too old: https://installvirtual.com/how-to-install-python-3-8-on-raspberry-pi-raspbian/
14) Create .env file `touch .env` and add necessary fields
15) Run app with `flask run --host=0.0.0.0` after updating env variable: `export FLASK_APP=grocery.py`
- might need to open up the 5000 port with ufw (also install ufw on raspberry pi)
16) Access from another computer (can check that the 5000 port is open with nmap `nmap <ip address>`)
17) npm install (had to do `sudo npm i -g npm` with the sudo user for some reason b/c I got an error)
18) Run `npx webpack --watch --config webpack/webpack.config.js --mode development` in top level directory to build files with webpack
19) Install webpack globally `sudo npm i webpack -g` and the webpack cli `sudo npm i webpack-cli -g`

