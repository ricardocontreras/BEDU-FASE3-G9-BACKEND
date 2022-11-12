const config = require('./config/settings');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = swaggerJsDoc(require('./config/swagger'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (request, response){
    response.redirect('/swagger');
});
app.get('/swagger.json', function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.send(swaggerDocs);
  }
);

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/api', require('./routes/routes'))

const PORT = process.env.PORT || config.PORT;
app.listen(PORT, () => {
    console.info(`server is listening on port ${PORT}`);
});