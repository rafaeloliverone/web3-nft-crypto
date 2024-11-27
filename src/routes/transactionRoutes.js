const express = require('express');

const { getTransactions, syncTransactions } = require('../controllers/transactionController');

const router = express.Router();

/**
 * @swagger
 * /transactions/{address}:
 *   get:
 *     tags:
 *         - Transactions
 *     summary: Retrieve transactions for an Ethereum address
 *     description: Fetches the transactions for a given Ethereum address, optionally filtering by date range.
 *     parameters:
 *       - name: "address"
 *         in: "path"
 *         description: "Ethereum address to retrieve transactions for."
 *         required: true
 *         schema:
 *           type: string
 *           example: "0x61d8838f9A00250C9AF13D622DA7c08c372ee587"
 *       - name: "startDate"
 *         in: "query"
 *         description: "Start date for filtering transactions (inclusive)."
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *           example: "2024/11/08"
 *       - name: "endDate"
 *         in: "query"
 *         description: "End date for filtering transactions (inclusive)."
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *           example: "2024/11/27"
 *     responses:
 *       200:
 *         description: List of transactions for the given Ethereum address.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "67461e639f4d952ffecb1243"
 *                   address:
 *                     type: string
 *                     example: "0x61d8838f9A00250C9AF13D622DA7c08c372ee587"
 *                   blockNumber:
 *                     type: string
 *                     example: "7158344"
 *                   timeStamp:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-11-26T19:15:24.000Z"
 *                   hash:
 *                     type: string
 *                     example: "0x66b6b3bcaef44f9ad5f8fddccb236c7b6403a854601805f121b03df8ce247cf6"
 *                   from:
 *                     type: string
 *                     example: "0x61d8838f9a00250C9AF13D622DA7c08c372ee587"
 *                   to:
 *                     type: string
 *                     example: "0xcf8edb3333fae73b23f689229f4de6ac95d1f707"
 *                   value:
 *                     type: string
 *                     example: "0"
 *                   gas:
 *                     type: string
 *                     example: "1179770"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-11-26T19:15:47.576Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-11-26T19:15:47.576Z"
 *                   __v:
 *                     type: integer
 *                     example: 0
 *       500:
 *         description: Error searching transactions..
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error searching transactions."
 */
router.get('/:address', getTransactions);

/**
 * @swagger
 * /transactions/{address}/sync:
 *   post:
 *     tags:
 *       - Transactions
 *     summary: Search transactions for an Ethereum address
 *     description: Triggers the synchronization process for fetching and storing transactions of the given Ethereum address.
 *     parameters:
 *       - name: address
 *         in: path
 *         required: true
 *         description: Ethereum address to synchronize transactions for.
 *         schema:
 *           type: string
 *           example: "0x61d8838f9A00250C9AF13D622DA7c08c372ee587"
 *     responses:
 *       201:
 *         description: List of transactions for the given Ethereum address.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   address:
 *                     type: string
 *                     example: "0x61d8838f9A00250C9AF13D622DA7c08c372ee587"
 *                   blockNumber:
 *                     type: string
 *                     example: "7159230"
 *                   timeStamp:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-11-26T22:20:36.000Z"
 *                   hash:
 *                     type: string
 *                     example: "0x6007086c77da3e79042e8ba0bc610c43eee91abfb8c34a8ec3ec69a9e6bc479d"
 *                   from:
 *                     type: string
 *                     example: "0x61d8838f9a00250c9af13d622da7c08c372ee587"
 *                   to:
 *                     type: string
 *                     example: "0xcf8edb3333fae73b23f689229f4de6ac95d1f707"
 *                   value:
 *                     type: string
 *                     example: "0"
 *                   gas:
 *                     type: string
 *                     example: "763053"
 *                   _id:
 *                     type: string
 *                     example: "674649e2b82c2ac7592f92ea"
 *                   __v:
 *                     type: integer
 *                     example: 0
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-11-26T22:21:22.294Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-11-26T22:21:22.294Z"
 *       200:
 *         description: Transactions already synced message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Transactions already synced message."
 *       500:
 *         description: Server error synchronizing transactions.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error synchronizing transactions."
 */
router.post('/:address/sync', syncTransactions);

module.exports = router;
