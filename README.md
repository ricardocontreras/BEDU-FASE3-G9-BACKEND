# BEDU-FASE3-G9-BACKEND
This is the repository for the second project of the BEDU Phase 2: Backend Fundamentals

API: https://bedu-fase3-g9-backend.herokuapp.com/

Team 9:

Hugo Armando Zepeda Ruiz
Israel Nicolas Vallejo Barboza
Ricardo Contreras Juárez
Keny Almazan

### To run project in Local:
1.- Download prject of repository $ git clone https://github.com/ricardocontreras/BEDU-FASE3-G9-BACKEND.git &

2.- run dependencies $ npm install

3.- run project in dev for use nodemon $ npm run dev

or run project for production $ npm start

### To create project in Heroku with docker
1.- Login in Heroku ~$ heroku login

2.- Login in Heroku ~$ heroku container:login

3.- Navigate to the app’s directory and create a Heroku app: (This step is optional, if the project is new) 
 ~$ heroku create name_project 
 Creating name_project... done, stack is heroku-20 https://name_project.herokuapp.com/ | https://git.heroku.com/name_project.git

4.- Build the image (Name image equal to app) - (Remember that for this step, you must have docker installed) 
 ~$ docker build . -t name_image:latest

5.- Push to Container Registry: 
 ~$ heroku container:push web --app name_project

6.- Then release the image to your app: 
 ~$ heroku container:release web --app name_project

### Deploy in heroku with docker
1.- Login in Heroku ~$ heroku login

2.- Login in Heroku ~$ heroku container:login

3.- Build the image (Name image equal to app) - (Remember that for this step, you must have docker installed) 
 ~$ docker build . -t bedu-fase3-g9-backend:latest

4.- Push to Container Registry: 
 ~$ heroku container:push web --app bedu-fase3-g9-backend

5.- Then release the image to your app: 
 ~$ heroku container:release web --app bedu-fase3-g9-backend

### Run Migration Database
##### Create tables
~>$ npx sequelize-cli db:migrate

~>$ npx sequelize-cli db:seed:all
##### Delete tables
~>$ npx sequelize-cli db:migrate:undo

~>$ npx sequelize-cli db:seed:all:undo