const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    address: { type: String, required: true },
    blockNumber: String,
    timeStamp: Date,
    hash: { type: String, unique: true },
    from: String,
    to: String,
    value: String,
    gas: String,
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
