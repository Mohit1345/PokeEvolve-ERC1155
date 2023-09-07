// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC1155LazyMint.sol";

contract Pokemon is ERC1155LazyMint {
    constructor(
        address _defaultAdmin,
        string memory _name,
        string memory _symbol
    ) ERC1155LazyMint(_defaultAdmin, _name, _symbol, msg.sender, 0) {}

    function verifyClaim(
        address _claimer,
        uint256 _tokenId,
        uint256 _quantity
        ) public view override {
              require(_tokenId == 0 ,"Only Pokemon are claimable");
              require(_quantity == 1,"Only 1 Pokemon can be claimed");
     }
    function evolve() public{
        _burn(msg.sender, 0, 2); //(sender's account, token id, number of tokens to burn)
        _mint(msg.sender,1,1,""); //(sender's account , token id to mint, quantity to be minted, details about token which is being minted )
     }
}