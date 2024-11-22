import React from 'react';
import Card from './SuggestionCard'
import cardlogo from '../../assests/Blog/image.webp';
import styles from './suggestion.module.css';
import arrowUpRight from '../../assests/AboutUs/arrowUpRight.svg';

let items = [
    {
      id: 1,
      logo:`${cardlogo}`,
      title: "Title 1",
      description: "Crypto ipsum bitcoin ethereum dogecoin litecoin. Avalanche ethereum polygon stacks dogecoin eCash ankr maker. Polkadot elrond IOTA terra kusama. Compound terra monero fantom XRP. Neo avalanche ankr PancakeSwap holo siacoin cardano bancor WAX vechain. Stellar revain."
    },
    {
      id: 2,
      logo:`${cardlogo}`,
      title: "Title 2",
      description: "Crypto ipsum bitcoin ethereum dogecoin litecoin. Avalanche ethereum polygon stacks dogecoin eCash ankr maker. Polkadot elrond IOTA terra kusama. Compound terra monero fantom XRP. Neo avalanche ankr PancakeSwap holo siacoin cardano bancor WAX vechain. Stellar revain."
    },
    {
      id: 3,
      logo:`${cardlogo}`,
      title: "Title 3",
      description: "Crypto ipsum bitcoin ethereum dogecoin litecoin. Avalanche ethereum polygon stacks dogecoin eCash ankr maker. Polkadot elrond IOTA terra kusama. Compound terra monero fantom XRP. Neo avalanche ankr PancakeSwap holo siacoin cardano bancor WAX vechain. Stellar revain."
    },
   
 ]

const SuggestionCardList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>You may also like</h2>
        <button className={styles.readMoreButton}>
             <span>View all</span>
             <img src={arrowUpRight} alt="icon" className="icon" />
         </button>
      </div>
      <div className={styles.cardContainer}>
        {items.map((item, index) => (
          <Card key={index} title={item.title} logo={item.logo} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default SuggestionCardList;
