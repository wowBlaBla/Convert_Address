const converter = require("bech32-converting");

// Example

console.log(converter('evmos').toBech32('0xBf6aad329B877214866670278A8c6F326d3E791A'));
console.log(converter('evmos').toHex('evmos1ha426v5msaepfpnxwqnc4rr0xfknu7g6rt5j0d'));
