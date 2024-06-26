import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // fetch(`https://open.er-api.com/v6/latest/USD`)
        // fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res))
        console.log(data);
    }, [currency])
    console.log(data);
    return data

// const options = {method: 'GET'};
// fetch('https://open.er-api.com/v6/latest/USD', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
}

export default useCurrencyInfo;