import React from 'react';

const CoinRow = ({coin , index}) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>
                <img src={coin.image} alt={coin.image} style={{width: "20px"}} className="me-3"/>
                {coin.name}
                <span className='ms-3 text-muted text-uppercase '>{coin.symbol}</span>
            </td>
            <td>{coin.current_price}</td>
            <td className={coin.price_change_percentage_24h>0? "text-success" : "text-danger"}>{coin.price_change_percentage_24h}</td>
            <td>{coin.total_volume}</td>
        </tr>
    );
}

export default CoinRow;
