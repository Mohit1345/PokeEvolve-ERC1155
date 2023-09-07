import { ConnectWallet, ThirdwebNftMedia, Web3Button, useAcceptDirectListingOffer, useAddress, useConnect, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";


const Home: NextPage = () => {
  const { contract: shop_contract_address } = useContract(
    "0x0AA7A0CC20E35127849f72C2798c20522fACF4bb"
  );
  const myaddress = useAddress();
  const { data: nfts } = useOwnedNFTs(shop_contract_address, myaddress);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
    <div>
      <ConnectWallet  theme="light" />
      <hr />
      {nfts?.map((nft) => (
        <div style = {{display:'flex'}} key={nft.metadata.id.toString()}>
          <ThirdwebNftMedia metadata={nft.metadata} />
          <hr />
          {nft.metadata.name}
          <hr />
          Number You have: {nft.quantityOwned}
          <hr />
        </div>
             
      ))}
    <hr />
    <Web3Button contractAddress={"0x0AA7A0CC20E35127849f72C2798c20522fACF4bb"} action={(contract)=>contract.erc1155.claim(0,1)}>CLaim Squirttle</Web3Button>  
    </div>
    <hr />
    <div>
    <Web3Button contractAddress={"0x0AA7A0CC20E35127849f72C2798c20522fACF4bb"} 
  action = {(contract) => contract.call("evolve")}>Evolve</Web3Button>  
    </div>

    </main>
    </div>
  );
};


export default Home;
