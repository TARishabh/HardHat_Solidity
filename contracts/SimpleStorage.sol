// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract SimpleStorage {
    uint256 favouriteNumber;

    struct People {
        uint256 favouriteNumber;
        string name;
    }

    mapping(string=>uint256) public nameToFavoriteNumber;

    People[] public people;

    function retrieve() public view returns (uint256) {
        return favouriteNumber;
    }

    function store(uint256 _favouriteNumber) public  {
        favouriteNumber = _favouriteNumber;
    }

    function addPerson(string memory _name, uint256 _favouriteNumber) public {
        people.push(People(_favouriteNumber, _name));
        nameToFavoriteNumber[_name] = _favouriteNumber;
    }
}