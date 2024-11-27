const express = require('express');

const { getNFT } = require('../controllers/nftController');

const router = express.Router();

/**
 * @swagger
 * /api/nft/{contractAddress}/{tokenId}:
 *   get:
 *     tags:
 *         - NFT
 *     summary: Retrieve NFT metadata by contract address and token ID
 *     description: Returns the metadata of an NFT specified by the contract address and token ID.
 *     parameters:
 *       - name: "contractAddress"
 *         in: "path"
 *         description: "Address of contract of NFT"
 *         required: true
 *         schema:
 *           type: string
 *           example: "0x806abb5db920af053530e81e12cb7569c117b6e1"
 *       - name: "tokenId"
 *         in: "path"
 *         description: "ID of NFT token"
 *         required: true
 *         schema:
 *           type: string
 *           example: "2543543543544444444444444"
 *     responses:
 *       200:
 *         description: Metadados do NFT
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "674619a0bb159ead8ecf593d"
 *                 contractAddress:
 *                   type: string
 *                   example: "0x806abb5db920af053530e81e12cb7569c117b6e1"
 *                 tokenId:
 *                   type: string
 *                   example: "2543543543544444444444444"
 *                 name:
 *                   type: string
 *                   example: "Test ICN Passport"
 *                 description:
 *                   type: string
 *                   example: "Test ICN Passport"
 *                 image:
 *                   type: string
 *                   example: "https://testnet.icn.global/downloads/nft.jpg"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-26T18:55:28.220Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-26T18:55:28.220Z"
 *                 __v:
 *                   type: integer
 *                   example: 0
 */
router.get('/:contractAddress/:tokenId', getNFT);

module.exports = router;
