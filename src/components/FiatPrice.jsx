import React, { useEffect, useState } from "react";
import { getMultiData } from "../utils/getMultiData";

import styles from "../styles/FiatPrice.module.css";
import Spinner from "../styled-components/Spinner";

const FiatPrice = ({ crypto }) => {
  const [isUsd, setIsUsd] = useState(true);
  const [cryptoData, setCryptoData] = useState();

  const handleFiatChange = (e) => {
    e.target.value == 'USD' ? setIsUsd(true) : setIsUsd(false)
  }

  useEffect(() => {
    getMultiData(crypto.CoinInfo.Name).then((data) => setCryptoData(data));
  }, [crypto]);

  if (!cryptoData) {
    return <p>Holaa</p>;
  }
  const fiatInfo = isUsd
    ? cryptoData?.DISPLAY[`${crypto.CoinInfo.Name}`]?.USD
    : cryptoData?.DISPLAY[`${crypto.CoinInfo.Name}`]?.ARS;

  return (
    <div className={styles.container}>
      <select
        onChange={e => handleFiatChange(e)}
        placeholder="FIAT"
        name="FIAT"
        id="FIAT"
      >
        <option value="USD">USD</option>
        <option value="ARS">ARS</option>
      </select>
      <div className={styles.info}>
        {fiatInfo ? (
          <>
            <p>Full name: {crypto.CoinInfo.FullName}</p>
            <p>Highest price this day: {fiatInfo.HIGHDAY}</p>
            <p>Lowest price this day: {fiatInfo.LOWDAY}</p>
            <p>Change in 24 hours: {fiatInfo.CHANGE24HOUR}</p>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default FiatPrice;
