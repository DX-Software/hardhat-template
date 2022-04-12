import { ethers } from "hardhat";

const { expect } = require("chai");

describe("HelloWorld", function () {
  it("should return hello world ", async function () {
    const [owner] = await ethers.getSigners();
    const ExampleContract = await ethers.getContractFactory("HelloWorld");

    const exampleContract = await ExampleContract.deploy();
    await exampleContract.deployed();

    expect(await exampleContract.helloWorld()).to.equal("Hello, world!");
  });
});
