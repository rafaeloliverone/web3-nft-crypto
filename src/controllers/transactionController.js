const { format } = require('date-fns');

const Transaction = require('../models/transactionModel');
const { fetchTransactions } = require('../services/etherscanService');

const getTransactions = async (req, res) => {
    const { address } = req.params;
    const { startDate, endDate } = req.query;

    try {
        const query = { address };
        if (startDate || endDate) {
            query.timeStamp = {};
            if (startDate) query.timeStamp.$gte = new Date(startDate);
            if (endDate) query.timeStamp.$lte = new Date(endDate);
        }

        const transactions = await Transaction.find(query);
        res.json(transactions);

    } catch (error) {
        res.status(500).json({
            error: 'Error searching transactions.',
            message: error.message
        });
    }
};

const syncTransactions = async (req, res) => {
    const { address } = req.params;

    try {
        const transactions = await fetchTransactions(address);

        const transactionsWithAddress = transactions.map((transaction) => {
            const timeStamp = format(new Date(transaction.timeStamp * 1000), 'yyyy/MM/dd HH:mm:ss');

            return {
                ...transaction,
                address,
                timeStamp,
            }
        });

        const savedTransactions = await Transaction.insertMany(transactionsWithAddress, { ordered: false });
        res.status(201).json(savedTransactions);
    } catch (error) {
        if (error.code === 11000) {
            res.status(200).json({ message: 'Transactions already synced message.' });
        } else {
            console.error(error);
            res.status(500).json({
                error: 'Error synchronizing transactions.',
                message: error.message
            });
        }
    }
};

module.exports = { getTransactions, syncTransactions };
