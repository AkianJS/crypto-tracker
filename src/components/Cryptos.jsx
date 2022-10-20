import styles from '../styles/Cryptos.module.css'

const Cryptos = ({crypto}) => {

  return (
    <option className={styles.option} 
    value={crypto.CoinInfo.Name}>
      {crypto.CoinInfo.Name} 

    </option>
  )
}

export default Cryptos