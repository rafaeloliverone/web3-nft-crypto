
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Web3 Blockchain Documentation',
        version: '1.0.0',
        description: 'A simple API with NFT Metadata and Cryptocurrency transactions.',
      },
    },
    apis: ['./src/routes/*.js'],
  };


const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };