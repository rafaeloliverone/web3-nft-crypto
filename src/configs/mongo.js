const mongoose = require('mongoose');

async function connectToMongoDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('MongoDB cconnection successful!'))
        .catch(err => console.error('Error connection MongoDB:', err)
    );
}

module.exports = connectToMongoDB;