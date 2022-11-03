require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const Private_Key = "4342bf48b3550a838639ef72a4d89cd0021549b789f858cd1cc01b49acf40ba5"

module.exports = {
  solidity: "0.8.0",
  networks: {
  	goerli: {
  		url: `https://goerli.infura.io/v3/a87e8b56d4af4063b01fef6c46987df5`,
  		accounts: [`0x${Private_Key}`]
  	}
  }
};