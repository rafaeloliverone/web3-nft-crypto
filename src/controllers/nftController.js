const NFT = require('../models/nftModel');
const { getNFTMetadata } = require('../services/nftService');

const getNFT = async (req, res) => {
    const { contractAddress, tokenId } = req.params;

    try {
        let nft = await NFT.findOne({ contractAddress, tokenId });

        if (!nft) {
            const metadata = await getNFTMetadata(contractAddress, tokenId);

            nft = new NFT({
                contractAddress,
                tokenId,
                ...metadata,
            });
            await nft.save();
        }

        res.json(nft);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getNFT };
