pragma solidity ^0.5.0;

import "./ERC721Mintable.sol";
// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract ContractVerifier {
    function verifyTx(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public returns(bool);
}


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is RealEstateContractERC721 {
    ContractVerifier contractVerifier;

    constructor(address verifier) public {
        contractVerifier = ContractVerifier(verifier);
    }


    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address account;
        bool isSubmitted;
    }

    // TODO define an array of the above struct
    Solution[] private solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private submittedSolutions;


    // TODO Create an event to emit when a solution is added
    event SolutionSubmitted(uint256 tokenId, address account);


    // TODO Create a function to add the solutions to the array and emit the event
    function appendSolution(uint256 tokenId, bytes32 key) public {
        Solution memory newSolution = Solution(tokenId, msg.sender, true);
        solutions.push(newSolution);
        submittedSolutions[key] = newSolution;
        emit SolutionSubmitted(tokenId, msg.sender);
    }


    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintToken(
        address to,
        uint256 tokenId,
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    ) public returns(bool) {
        bytes32 key = getKey(a, b, c, input);

        require(contractVerifier.verifyTx(a, b, c, input), "Invalid proof");
        require(!submittedSolutions[key].isSubmitted, "Solution already exists");

        appendSolution(tokenId, key);
        bool status = mint(to, tokenId);
        return status;
    }

    function getKey(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    ) internal view returns(bytes32) {
        return keccak256(abi.encodePacked(a, b, c, input));
    }
}

















