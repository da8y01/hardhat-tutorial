const { expect } = require("chai");

const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("CrowdFunding contract", function () {
  async function deployCrowdFundingFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const hardhatCrowdFunding = await ethers.deployContract("CrowdFunding");

    await hardhatCrowdFunding.waitForDeployment();

    return { hardhatCrowdFunding, owner, addr1, addr2 };
  }

  describe("Deployment", function () {
    // `it` is another Mocha function. This is the one you use to define each
    // of your tests. It receives the test name, and a callback function.
    //
    // If the callback function is async, Mocha will `await` it.
    // it("Should set the right owner", async function () {
    //   // We use loadFixture to setup our environment, and then assert that
    //   // things went well
    //   const { hardhatCrowdFunding, owner } = await loadFixture(deployCrowdFundingFixture);

    //   // `expect` receives a value and wraps it in an assertion object. These
    //   // objects have a lot of utility methods to assert values.

    //   // This test expects the owner variable stored in the contract to be
    //   // equal to our Signer's owner.
    //   expect(await hardhatCrowdFunding.owner()).to.equal(owner.address);
    // });
  });

  describe("Functions", function() {
    it("createCampaign set the correct fields", async function() {
      const { hardhatCrowdFunding, owner } = await loadFixture(deployCrowdFundingFixture);
      const title = "Apple One",
        description = "This is Apple One campaign.",
        target = ethers.parseEther("0.01"),
        // target = "0.01",
        deadline = 1704067199000,
        image = "https://www.industryleadersmagazine.com/wp-content/uploads/2012/04/Apple.jpg";

      let resultCampaign = await hardhatCrowdFunding.createCampaign(owner, title, description, target, deadline, image);
      console.log(resultCampaign);
      expect(await resultCampaign.wait(0)).to.equal(0);
    });
  });
});
