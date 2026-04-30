import { useEffect, useState } from "react";
import CurrencySelector from "./CurrencySelector";

export default function Converter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(null);

  // Fetch rates
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
      });
  }, [from]);

  // Calculate result
  useEffect(() => {
    if (rates[to]) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResult((amount * rates[to]).toFixed(2));
    }
  }, [amount, rates, to]);

  const currencies = Object.keys(rates);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
        💱 Currency Converter
      </h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full mb-4 p-2 border rounded-lg"
      />

      <div className="flex gap-2 mb-4">
        <CurrencySelector value={from} onChange={setFrom} options={currencies} />
        <button
          onClick={handleSwap}
          className="px-3 bg-gray-200 rounded-lg"
        >
          🔄
        </button>
        <CurrencySelector value={to} onChange={setTo} options={currencies} />
      </div>

      <div className="text-center text-lg font-semibold">
        {amount} {from} = {result} {to}
      </div>
    </div>
  );
}