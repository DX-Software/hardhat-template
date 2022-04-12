// SPDX-License-Identifier: MIT
// Developed by: dxsoftware.net

import "hardhat/console.sol";

pragma solidity ^0.8.0;

contract HelloWorld {
  function helloWorld() public view returns (string memory) {
    string memory hello = "Hello, world!";

    console.log(hello);

    return hello;
  }
}
