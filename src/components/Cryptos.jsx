import styles from '../styles/Cryptos.module.css'

const Cryptos = ({crypto, setCrypto, optionRef}) => {

  return (
    <option className={styles.option} 
    ref={optionRef}
    onClick={() => {
      setCrypto(crypto)
    }}
    value={crypto.CoinInfo.Id}>
      {crypto.CoinInfo.Name} 

    </option>
  )
}

export default Cryptos