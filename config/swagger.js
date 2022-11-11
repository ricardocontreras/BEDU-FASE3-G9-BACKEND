const options = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'API School Docs',
        version: '1.0.0',
        description: 'Project Bedo for create this API to Schools.',
        contact: {
            name: 'API Support',
            email: 'ricardo.contreras.juarez@gmail.com'
        },license: {
            name: "NodeJS",
            url: "https://github.com/nodejs/node/blob/main/LICENSE"
        }
      }
    },
    apis: ['./routes/*.js']
  };
  
  module.exports = options;