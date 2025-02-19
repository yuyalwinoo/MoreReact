import React from 'react'

function CurrencySelector({label,currencies, selectedCurrency, onChange}) {
  return (
    <div className=''>
        <label htmlFor={`${label}`} className='text-white text-sm mb-1'>{label}</label>
        <select className='w-full p-2 border rounded-sm font-medium outline-none'
            value={selectedCurrency}
            onChange={e=>onChange(e.target.value)}>
            {
                currencies.map((currency,index)=>(
                    <option className='text-black' value={currency} key={index}>{currency}</option>
                ))
            }
        </select>
    </div>
    
  )
}

export default CurrencySelector