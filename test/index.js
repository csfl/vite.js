describe('Mnemonic Test: bip39', function () {
    require('./mnemonic');
});

describe('HD Test: libs/hd', function () {
    require('./hd');
});

describe('Ed25519 blake2b Test: tweetnale-blake2b', function () {
    require('./ed25519');
});

describe('Address Test: src/utils/address', function () {
    require('./address');
});

describe('Wallet Test: src/Wallet', function () {
    require('./Wallet/keystore');
    require('./Wallet/address');
});