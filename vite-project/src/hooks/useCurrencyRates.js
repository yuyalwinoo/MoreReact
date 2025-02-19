import React, { useEffect, useState } from 'react'

const useCurrencyRates = (baseCurrency) => {
    const [rates, setRates] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        async function fetchRates(){
            setLoading(true);
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
                const data = await response.json();
                setRates(data.rates);
            } catch (error) {
                setError('Error on fetching API.');
            } finally {
                setLoading(false);
            }
        }
        fetchRates();
    },[baseCurrency]);

    return {rates,error,loading};
}

export default useCurrencyRates