import React from 'react';
import CoinRow from './CoinRow';

const TableCoins = ({coins, search}) => {
    const titles=["#","Coin","Price","Price Change","24h Volume"];
    
    const filterCrypto= coins?.filter(coin => coin.name.toLowerCase().includes(search?.toLowerCase()));

    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {titles.map((t,index)=>(<td key={index}>{t}</td>))}
                </tr>
            </thead>
            
            <tbody>
                    {filterCrypto?.map((coin,index) => (
                        <CoinRow coin={coin} key={index} index={index}/>
                    ))}
            </tbody>
        </table>
    );
}

export default TableCoins;
