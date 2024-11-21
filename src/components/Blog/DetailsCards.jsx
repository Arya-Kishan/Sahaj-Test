import React from 'react';
import styles from  "./deatilsCard.module.css"


let cardsinfoData=[
    {
        heading:"Crypto ipsum bitcoin ethereum ",
        content:`Crypto ipsum bitcoin ethereum dogecoin litecoin.
                 Tether avalanche dogecoin aave klaytn loopring livepeer ren ankr.
                 Ipsum klaytn tezos enjin ICON. Amp maker decentraland ICON 
                 polkadot serum telcoin livepeer ox. Uniswap TRON bitcoin avalanche
                 dash tether tezos neo polygon kusama. Audius ren zcash fantom 
                stellar BitTorrent maker. Hive flow kava stellar celsius celo.
                Audius terraUSD tezos stellar ethereum algorand polygon. Compound 
                TRON bancor zcash ipsum bancor XRP zcash. Ox ethereum polkado
                harmony zcash digibyte holo elrond. Waves polymath tezos TRON
                monero waves gala dash. EOS siacoin harmony gala enjin holo gala.
                Chainlink monero dogecoin filecoin ren. Filecoin fantom celsius 
                loopring terraUSD cardano secret amp. THETA terra serum aave THETA 
                audius.TRON velas XRP neo XRP quant. Celo cosmos livepeer binance
                decred algorand. Tezos horizen secret kava amp chiliz.`

    },
    {
        heading:"Crypto ipsum bitcoin ethereum ",
        content:`Crypto ipsum bitcoin ethereum dogecoin litecoin.
                 Tether avalanche dogecoin aave klaytn loopring livepeer ren ankr.
                 Ipsum klaytn tezos enjin ICON. Amp maker decentraland ICON 
                 polkadot serum telcoin livepeer ox. Uniswap TRON bitcoin avalanche
                 dash tether tezos neo polygon kusama. Audius ren zcash fantom 
                stellar BitTorrent maker. Hive flow kava stellar celsius celo.
                Audius terraUSD tezos stellar ethereum algorand polygon. Compound 
                TRON bancor zcash ipsum bancor XRP zcash. Ox ethereum polkado
                harmony zcash digibyte holo elrond. Waves polymath tezos TRON
                monero waves gala dash. EOS siacoin harmony gala enjin holo gala.
                Chainlink monero dogecoin filecoin ren. Filecoin fantom celsius 
                loopring terraUSD cardano secret amp. THETA terra serum aave THETA 
                audius.TRON velas XRP neo XRP quant. Celo cosmos livepeer binance
                decred algorand. Tezos horizen secret kava amp chiliz.`

    },
    {
        heading:"Crypto ipsum bitcoin ethereum ",
        content:`Crypto ipsum bitcoin ethereum dogecoin litecoin.
                 Tether avalanche dogecoin aave klaytn loopring livepeer ren ankr.
                 Ipsum klaytn tezos enjin ICON. Amp maker decentraland ICON 
                 polkadot serum telcoin livepeer ox. Uniswap TRON bitcoin avalanche
                 dash tether tezos neo polygon kusama. Audius ren zcash fantom 
                stellar BitTorrent maker. Hive flow kava stellar celsius celo.
                Audius terraUSD tezos stellar ethereum algorand polygon. Compound 
                TRON bancor zcash ipsum bancor XRP zcash. Ox ethereum polkado
                harmony zcash digibyte holo elrond. Waves polymath tezos TRON
                monero waves gala dash. EOS siacoin harmony gala enjin holo gala.
                Chainlink monero dogecoin filecoin ren. Filecoin fantom celsius 
                loopring terraUSD cardano secret amp. THETA terra serum aave THETA 
                audius.TRON velas XRP neo XRP quant. Celo cosmos livepeer binance
                decred algorand. Tezos horizen secret kava amp chiliz.`

    }
]

const DeatilsCards = () => {
  return (
    <div className={styles.cardList}>
      {cardsinfoData.map((item, index) => (
        <div key={index} className={styles.card}>
          <p className={styles.cardHeading}>{item.heading}</p>
          <p className={styles.cardContent}>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DeatilsCards;
