import React, { useState, useEffect } from "react";
import { getTopTewnty } from "../utils/getMultiData";
import Cryptos from "./Cryptos";
import styles from "../styles/Landing.module.css";
import FiatPrice from "./FiatPrice";
import Spinner from "../styled-components/Spinner";

const Landing = () => {
  const [crypto, setCrypto] = useState(null);
  const [topCrypto, setTopCrypto] = useState(null);
  const [cryptoData, setCryptoData] = useState(null);
  const image = "https://www.cryptocompare.com";

  useEffect(() => {
    getTopTewnty(20)
      .then((resp) => {
        setTopCrypto(resp.Data);
        setCrypto(resp.Data[0])
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleOptionChange = (e) => {
    const newCrypto = topCrypto.find((item) => {
      return e.target.value == item.CoinInfo.Name
    })
    if (newCrypto) setCrypto(newCrypto)
  }

  if (!topCrypto) {
    return <Spinner />;
  }
  return (
    <section onChange={(e) => handleOptionChange(e)} className={styles.container}>
      <div className={styles.cryptoContainer}>
        <label className={styles.label} htmlFor="crypto">
          Pick a cryptocurrency
        </label>
        <br />
        <select name="crypto" id="crypto" placeholder="Cryptos">
          {topCrypto.map((item) => (
            <Cryptos
              key={item.CoinInfo.Id}
              crypto={item}
            />
          ))}
        </select>

        {crypto ? (
          <div className={styles.coinInfo}>
            <img
              className={styles.cryptoIcon}
              width={50}
              height={50}
              src={image + crypto.CoinInfo?.ImageUrl}
              alt={crypto.CoinInfo?.Name}
            />
            <p className={styles.info1}>Launched on: {crypto.CoinInfo?.AssetLaunchDate}</p>
            <p className={styles.info2}>Reward per block: {crypto.CoinInfo?.BlockReward}</p>
          </div>
        ) : (
          <Spinner />
        )}
      </div>

      <div className={styles.fiatContainer}>
        <label htmlFor="FIAT">Pick a FIAT</label>
        <br />
        {crypto ? (
          <FiatPrice
            crypto={crypto}
            setCryptoData={setCryptoData}
            cryptoData={cryptoData}
          />
        ) : undefined}
      </div>
    </section>
  );
};

export default Landing;
