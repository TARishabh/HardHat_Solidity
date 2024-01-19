const { task } = require("hardhat/config");

task("block-number", "Prints the Current Block Number of a Blockchain").setAction(
    async (taskArgs, hre) =>{
        const blockNumber = await hre.ethers.provider.getBlockNumber();
        console.log(`Current Block Number is ${blockNumber}`);
    }
)

module.exports = {}