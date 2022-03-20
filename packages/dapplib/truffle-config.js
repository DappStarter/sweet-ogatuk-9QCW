require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe street recipe magic modify hen light army gate'; 
let testAccounts = [
"0xdb97b733ffc283d498e249aed436e7386011223b8fc62c211f38897e42009166",
"0x3a02b1c3bfa37ca9044b82ae081669f4bf314fba9ad9fa58d16d9cdece6ea3f1",
"0x419fa8df1969c5da6293e8a5a2035b1ad7ec5f82a38122f03f0dc5217d95e682",
"0x3c08b2278302112b2aed82b34690e0e65491f6176ea8137f122c1975cb5fbaea",
"0x5cd8b18212c6d9dd3be4286657a4697402f25861e4835ab4e5e69adbcfa5689d",
"0xa8ac70c18b790852e5b78050e364e337723731d3a43be07159e2613a8c3ecc9a",
"0x561bade2afd6f989517fda189afd58533e8a69875f1fb37fbe6d40d4f1874023",
"0x5dba4654c431fcf96d64f3c402058dea660a0052151a7e49bcccf3a3c84d455a",
"0x90360d66844fa973f272b144244c386f4895086a5dc6744dc2dfd6319c9f05d6",
"0xd08ca5c0422ff2d46ab9d267515ef644149afd7a781a4c5f51b659499a028750"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

