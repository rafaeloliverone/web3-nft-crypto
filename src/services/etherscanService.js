const axios = require('axios');

const fetchTransactions = async (address) => {

    const url = `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${process.env.ETHERSCAN_API_KEY}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === '1') {
            return response.data.result.slice(0, 5);
        } else {
            throw new Error(response.data.message || 'Error searching transactions.');
        }
    } catch (error) {
        console.error('Error searching transactions in the Etherscan:', error.message);
        throw error;
    }
};

module.exports = { fetchTransactions };
