import styles from "../styles/CryptoCard.module.css";

const CryptoCard = ({ crypto }) => {
  const image = "https://www.cryptocompare.com";

  return (
    <li className={styles.container}>
      <img
        width={60}
        src={image + crypto.CoinInfo.ImageUrl}
        alt={crypto.CoinInfo.FullName}
      />
      <p>Price: {crypto.DISPLAY?.USD.PRICE}</p>
      <p>Change the last 24 hours: {crypto.DISPLAY?.USD.CHANGE24HOUR}</p>
      <p>Lowest price today: {crypto.DISPLAY?.USD.LOWDAY}</p>
      <p>Total supply: {crypto.DISPLAY?.USD.SUPPLY}</p>
    </li>
  );
};

export default CryptoCard;
