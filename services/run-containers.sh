#!/bin/bash
docker run -d\
 -e MYSQL_DATABASE=challenger\
 -e MYSQL_ROOT_PASSWORD=challenger\
 -e MYSQL_USER=challenger\
 -e MYSQL_PASSWORD=challenger\
 --name mysql mysql:5.7
docker run --name challenger_services -d --link mysql:mysql -P -t polyglot/challenger_services



