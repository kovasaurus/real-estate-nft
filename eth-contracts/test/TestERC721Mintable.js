var ERC721MintableComplete = artifacts.require('RealEstateContractERC721');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, "1111", { from: account_one });
            await this.contract.mint(account_one, "2222", { from: account_one });
            await this.contract.mint(account_one, "3333", { from: account_one });
        })

        it('should return total supply', async function () { 
            const totalSupply = await this.contract.totalSupply.call({ from: account_one });
            assert.equal(totalSupply, 3, "Total supply should be 3");
        })

        it('should get token balance', async function () { 
            const tokenBalance = await this.contract.balanceOf.call(account_one, { from: account_one });
            assert.equal(tokenBalance, 3, "Balance should be 3");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const baseURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";
            const tokenID = 1111;
            const expectedURI = `${baseURI}${tokenID}`;
            const tokenURI = await this.contract.tokenURI.call(tokenID, { from: account_one });
            assert.equal(expectedURI, tokenURI, "Incorrect token URI");
        })

        it('should transfer token from one owner to another', async function () { 
            const tokenId = 1111;
            await this.contract.transferFrom(account_one, account_two, tokenId);
            const tokenOwner = await this.contract.ownerOf.call(tokenId);
            assert.equal(tokenOwner, account_two, "Incorrect token owner");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let passed = false;
            try {
                await this.contract.mint(account_two, "4444", { from: account_two });
            } catch (error) {
                passed = true;
            }
            assert.equal(passed, true, "Token was minted by not contract owner");
        })

        it('should return contract owner', async function () { 
            const owner = await this.contract.owner.call();
            assert.equal(owner, account_one, "Wrong owner returner");
        })

    });
})