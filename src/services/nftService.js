const { Web3 } = require('web3');
const axios = require('axios');

const web3 = new Web3(process.env.INFURA_URL + process.env.INFURA_PROJECT_ID);

console.log('Web3 initialized successfully');

const ERC721_ABI = [
    {
        constant: true,
        inputs: [{ name: '_tokenId', type: 'uint256' }],
        name: 'tokenURI',
        outputs: [{ name: '', type: 'string' }],
        type: 'function',
    },
];

const resolveIPFS = (url) => {
    if (url.startsWith('ipfs://')) {
        return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
    }
    return url;
};

const getNFTMetadata = async (contractAddress, tokenId) => {
    try {
        const contract = new web3.eth.Contract(ERC721_ABI, contractAddress);
        const tokenURI = await contract.methods.tokenURI(tokenId).call();
        const resolvedURI = resolveIPFS(tokenURI);

        const { data } = await axios.get(resolvedURI, {
            headers: {
                'User-Agent': 'NFT-Metadata-Fetcher/1.0',
            },
        });
        return data;
    } catch (error) {
        throw new Error('Error searching metadata of NFT: ' + error.message);
    }
};

module.exports = { getNFTMetadata };
