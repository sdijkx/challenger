FROM ubuntu
RUN apt-get update
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN useradd -ms /bin/bash frontend
USER frontend
WORKDIR /home/frontend
ENV CHALLENGER_SERVICES_HOST=http://services:8080
ADD server/server.js /home/frontend/server.js
ADD server/package.json /home/frontend/package.json
ADD site /home/frontend/site
RUN npm install
EXPOSE 8081
CMD nodejs server.js
 
