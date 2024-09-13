import React from 'react';

const CurrencyCalculator = ({ amount, fromCurrency, toCurrency, currencies, setResult }) => {
  const calculateConversion = () => {
    if (!amount) {
      setResult('Please put amont.');
      return;
    }

    try {
      const fromRate = currencies[fromCurrency];
      const toRate = currencies[toCurrency];

      if (fromRate && toRate) {
        const rate = toRate / fromRate;
        const convertedAmount = (amount * rate).toFixed(2);
        setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
      } else {
        setResult('Currency not available.');
      }
    } catch (error) {
      console.error('Error converting currencies:', error);
      setResult('Error fetching conversion rate.');
    }
  };

  return (
    <div>
      <button
        type="submit"
        onClick={calculateConversion}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 mt-5"
      >
        Convert
      </button>
    </div>
  );
};

export default CurrencyCalculator;
