const Verifier = artifacts.require('Verifier');
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const { proof, inputs } = require('../../zokrates/code/square/proof.json');
const truffleAssert = require('truffle-assertions');

contract('TestSolnSquareVerifier', accounts => {
    const owner = accounts[0];
    const account_one = accounts[2];
    
    describe('new solution can be added for contract', async () => {
        beforeEach(async() => {
            const verifier = await Verifier.new({ from: owner });
            this.contract = await SolnSquareVerifier.new(verifier.address, { from: owner });
        })

        it('should mint new token', async() => {
            const tokenId = 111;
            const mintingResult = await this.contract.mintToken(account_one, tokenId, proof.a, proof.b, proof.c, inputs, { from: owner });
            truffleAssert.eventEmitted(mintingResult, 'Transfer', (event) => {
                return event.from == owner && 
                    event.to == account_one &&
                    event.tokenId == tokenId;
            })
        })
    })
})

