import React, { useState, useEffect } from 'react';
import CoinTableRow from './CoinTableRow';

function CoinTable() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => setCoins(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Crypto Currency Market</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <CoinTableRow key={index} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinTable;
