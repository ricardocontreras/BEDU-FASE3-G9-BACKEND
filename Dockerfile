FROM node:16
ENV NODE_ENV=production
ENV DB_USER=288480
ENV DB_PASSWORD=4_Q<M)DiRo3S
ENV DB_NAME=bedu-fase3-g9-backend_school
ENV DB_HOST=mysql-bedu-fase3-g9-backend.alwaysdata.net
ENV DB_PORT=3306
ENV DIALECT=mysql

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "node", "./app.js" ]