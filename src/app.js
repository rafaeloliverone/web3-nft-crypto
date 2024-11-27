require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const nftRoutes = require('./routes/nftRoutes');
const mongoConnection = require('./configs/mongo');
const transactionRoutes = require('./routes/transactionRoutes');
const { swaggerUi, swaggerDocs } = require('./configs/swagger');

const app = express();

app.use(bodyParser.json());

app.use('/api/nft', nftRoutes);
app.use('/transactions', transactionRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

mongoConnection()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});