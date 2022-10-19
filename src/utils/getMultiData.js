const API_KEY = "a20969abe80f7393314e3f6cee93fecad842bbaac170761d552e0d6b6f41fc4c"

 export const getMultiData = (coin) => {
    return fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=USD,ARS&api_key=${API_KEY}`)
    .then(res => res.json())
}

export const getTopTewnty = (amount) => {
    return fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=${amount}&tsym=USD&api_key=${API_KEY}`)
    .then(res => res.json())
}
