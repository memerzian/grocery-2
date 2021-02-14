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
6) Switch to grocery-lister user
7) Generate ssh key and add to ssh agent for git: https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
8) Add as a deploy key in git. Repo > settings > deploy key. Copy public key
9) Create repo in app directory (mkdir repo)
10) Clone git repository in that directory: (git clone [link from repository])
11) Install all requirements `pip3 install -r requirements.txt`
