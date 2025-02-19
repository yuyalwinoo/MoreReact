import React, { useEffect, useState } from 'react'
import useCurrencyRates from '../hooks/useCurrencyRates';
import CurrencySelector from './CurrencySelector';

const CurrencyConverter = () => {
    const [toConvertAmount, setToConvertAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("MMK");
    const [convertedAmount, setConvertedAmount] = useState(null);
    useEffect(()=>{
        setConvertedAmount(null);
    },[toConvertAmount])

    const {rates, error, loading} = useCurrencyRates(fromCurrency);
    const convertCurrency = ()=>{
        if(!rates[toCurrency]){
            setConvertedAmount('N/A');
            return;
        }
        setConvertedAmount((toConvertAmount * rates[toCurrency]).toFixed(2));
    }
    return (
        <div className='bg-white/0 border border-white/10 shadow-xl backdrop-blur-lg  w-1/3 mx-auto rounded-2xl p-5 flex flex-col gap-y-4'>
            <h2 className='text-center font-bold text-2xl'>Currency Converter</h2>
            <div>
                <label htmlFor='initialAmount' className='text-white text-sm mb-1'>Amount</label>
                <input 
                    type='number' 
                    className='w-full rounded-sm border outline-none p-2'
                    value={toConvertAmount}
                    onChange={(e)=>setToConvertAmount(e.target.value)}/>
            </div>
            <div className='grid grid-cols-2 gap-x-2'>
                <CurrencySelector 
                    label={'From'} 
                    currencies={Object.keys(rates)}
                    selectedCurrency={fromCurrency}
                    onChange={setFromCurrency}/>
                <CurrencySelector 
                    label={'To'} 
                    currencies={Object.keys(rates)}
                    selectedCurrency={toCurrency}
                    onChange={setToCurrency}/>
            </div>
            <button type='button' 
                onClick={convertCurrency}
                className='w-full mt-2 p-2 rounded-sm bg-green-700 text-sm text-white font-extrabold hover:bg-green-950 duration-300'
            >Convert</button>
            <div className='text-center text-sm font-bold'>
                {loading && <p className=' text-gray-500'>Loading ...</p>}

                {error && <p className=' text-red-500'>{error}</p>}

                {convertedAmount === null && 
                    <p className=' '>Click "Convert" to calculate result.</p>
                }

                {!loading && !error && convertedAmount !== null &&
                    <p className=''>
                        {toConvertAmount} {fromCurrency} = &nbsp; 
                        <span className='text-green-400'>
                            {convertedAmount} {toCurrency}
                        </span>
                    </p>
                }
            </div>
        </div>
    )
}

export default CurrencyConverter