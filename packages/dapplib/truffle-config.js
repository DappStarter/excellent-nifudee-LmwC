require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn punch harvest crisp flip slam'; 
let testAccounts = [
"0xd7d3edacffbcfa52d75c86450af92b7611c39f1a4124abf58f64cc73f56326c6",
"0xa7d51595b034c356823707ecf711e1a49f6691583721a3fa30190c8ff7bb8622",
"0x32334e3c64a439c33de5d3ec56a6a1cf6ed2374eec352dce3d3dbca7c269e50c",
"0xb33b45761a3b44015859a69720b4f3c1f833ddf16fb6594ef721611ecc8d7139",
"0x2c422feebb3e9e050f7afc8cb7c646ba49cf6ce9106114e305e111975074c746",
"0x160ab93361fad0a674b68d345c0ea433554052a3b9ac8dc169c89398e6e9b92d",
"0xe6dea1921e8fba27feba7347abfa995c42d554a4ffd0383df0afbfa031d6de76",
"0xfa48a346fb44a978ff85b33651bfb41cc83729c5c354072fcbe362866edf384d",
"0x341985f070190e0a1ffcecf5433564eed58a7deca82bfe5bda4d3262f78f1bc2",
"0x3a409150f76817d02ef0ae606e921d835e408a66db6b79414ebd32bb44bc8c7e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

