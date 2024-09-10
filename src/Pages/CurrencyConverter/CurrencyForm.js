import React from 'react';

const CurrencyForm = ({ currencies, fromCurrency, toCurrency, amount, handleChange }) => {
  return (
    <div id="conversion-form" className="space-y-4 w-100 mx-auto">
      <div className="form-group">
        <label htmlFor="amount" className="block text-gray-700">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={handleChange}
          placeholder="Enter amount"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="form-group">
        <label htmlFor="from-currency" className="block text-gray-700">From Currency:</label>
        <select
          id="from-currency"
          name="fromCurrency"
          value={fromCurrency}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          {Object.keys(currencies).map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="to-currency" className="block text-gray-700">To Currency:</label>
        <select
          id="to-currency"
          name="toCurrency"
          value={toCurrency}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          {Object.keys(currencies).map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyForm;
