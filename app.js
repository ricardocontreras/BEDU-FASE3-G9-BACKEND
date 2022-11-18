const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = swaggerJsDoc(require('./config/swagger'));

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.info(`server is listening on port ${PORT}`);
});