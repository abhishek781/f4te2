import React from 'react';

function CoinTableRow({ coin }) {
  return (
    <tr>
      <td>{coin.name}</td>
      <td>{coin.symbol}</td>
      <td>{coin.current_price}</td>
      <td>{coin.total_volume}</td>
      <td><img src={coin.image} alt={coin.name} style={{ width: '50px', height: '50px' }} /></td>
    </tr>
  );
}

export default CoinTableRow;
