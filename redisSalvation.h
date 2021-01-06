//copy and paste this into the terminal
echo bin >> /app/.gitignore
cd /tmp
wget http://download.redis.io/redis-stable.tar.gz
tar xvzf redis-stable.tar.gz
cd redis-stable
nice make PREFIX=/app install


/*
nice prevents high CPU usage warning on container.
The above creates a folder /app/bin with the redis binaries.
The /tmp folder will clean itself up on the next project restart.
  create redis.conf in the home directory using the terminal still 

  copy the code below into the redis.conf file
*/

# https://redis.io/topics/config

bind 127.0.0.1

protected-mode yes

port 6379

pidfile /app/.data/var/run/redis_6379.pid

dbfilename dump.rdb
dir /app/.data/

# glitch has memory constraints
maxmemory 400000000
maxmemory-policy noeviction

appendonly yes

auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb

//Start script in package.json should look like this
"scripts": {
    "start": "/app/bin/redis-server /app/redis.conf & node server.js"
  },