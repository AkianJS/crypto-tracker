import styles from "../styles/Top40Cryptos.module.css";
import { useEffect, useState } from "react";
import { getTopTewnty } from '../utils/getMultiData'

import CryptoCard from "../components/CryptoCard";
import Spinner from '../styled-components/Spinner'
const Top40Cryptos = () => {
  const [top, setTop] = useState(null);

  useEffect(() => {
    getTopTewnty(40).then((data) => setTop(data.Data));
  }, []);

  if (!top)
  return <Spinner/>

  return <ul className={styles.container}>
    {
        top.map((item) => 
            <CryptoCard
            key={item.CoinInfo.Id}
            crypto={item}/>
        )
    }
  </ul>;
};

export default Top40Cryptos;
