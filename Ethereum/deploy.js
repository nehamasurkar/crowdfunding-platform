const HDWalletProvider = require('truffle-hdwallet-provider');

const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

require('dotenv').config();


const provider = new HDWalletProvider(
    'loan swap approve extra oppose vehicle demand chicken rotate multiply artist whisper',
    'https://goerli.infura.io/v3/0fb0a44602c7479d9b73e8efb4be5895'
    
);

const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attemping to deploy from accounts ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({gas:'1000000', from: accounts[0] });

    console.log('Contract deployed to ', result.options.address);
};

deploy();