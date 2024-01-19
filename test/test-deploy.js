const { assert } = require("chai");
const { ethers } = require("hardhat");
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("SimpleStorage",function (){
    let simpleStorageFactory, simpleStorage;
    beforeEach(async function (){
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
    });

    it("Should start with a favourite number of 0", async function(){
        const currentValue = await simpleStorage.retrieve();
        const expectedValue = "0";
        assert.equal(currentValue.toString(), expectedValue);
    })

    it("Should update when we call store", async function(){
        const transactionResponse = await simpleStorage.store("7");
        await transactionResponse.wait(1);
        const currentValue = await simpleStorage.retrieve();
        assert.equal(currentValue.toString(), "7");
        
    })

    // it("Should add People struct in people array",async function(){
    //     const _name = "Rishabh";
    //     const _favouriteNumber = "69";
    //     const transactionResponse = await simpleStorage.addPerson(_favouriteNumber,_name)
    //     await transactionResponse.wait(1)
    //     const { favoriteNumber, name } = await simpleStorage.people(0)
    //     assert.equal(favoriteNumber, _favouriteNumber);
    //     assert.equal(_name,name);
    // })
    // it("Should work correctly with the people struct and array", async function () {
    //     const expectedPersonName = "Patrick"
    //     const expectedFavoriteNumber = "16"
    //     const transactionResponse = await simpleStorage.addPerson(
    //       expectedPersonName,
    //       expectedFavoriteNumber
    //     )
    //     await transactionResponse.wait(1)
    //     const { favoriteNumber, name } = await simpleStorage.people[0]
    //     console.log(favoriteNumber, name);
    //     // We could also do it like this
    //     // const person = await simpleStorage.people(0)
    //     // const favNumber = person.favoriteNumber
    //     // const pName = person.name
    
    //     assert.equal(name, expectedPersonName)
    //     assert.equal(favoriteNumber, expectedFavoriteNumber)
    //   })
})