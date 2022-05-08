require("@nomiclabs/hardhat-waffle");

//const ALCHEMY_API_KEY = "lLy4lOgOn-tba_a7yY7p2SFDyAscQC4g";
const ROPSTEN_PRIVATE_KEY ="85b37039a7e5f7f24badb9d3c0a39eebb189b0b97dda05e2f55c41085712dea9";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/lLy4lOgOn-tba_a7yY7p2SFDyAscQC4g",
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
