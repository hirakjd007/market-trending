import React from 'react'
import './MarketCss.css';
import logo from './loading.gif'
class Market extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        items: [],
        isLoaded: false,
    }
}

componentDidMount() {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=12&structure=array')
        //fetch('https://facebook.github.io/react-native/movies.json')
        .then(Response => Response.json())
        .then(res => {
            console.log(res);
            this.setState({
                isLoaded: true,
                items: res.data,
            });
        })
        .catch(error => {
            console.log(error)
        })
}

render() {

    var { isLoaded} = this.state;


    if (!isLoaded) {
        return <div> <img src={logo} alt="loading..." />
        </div>
    }
    else {

        return (
<div id="pricing-table" class="clear">{
     this.state.items.map((dynamicData, key) =>
    <div class="plan">
        <h3>{dynamicData.name} <span>{dynamicData.rank}</span></h3>    
        <a class="signup" href="https://www.coinbase.com/">Invest in {dynamicData.symbol} </a>    
        <ul>
            <li><b>{dynamicData.symbol}</b></li>
            <li><b>Circulating Supply</b> {dynamicData.circulating_supply}</li>
            <li><b>Total Supply</b><br/> {dynamicData.total_supply}</li>	
            <li><b>Price in USD</b> ${dynamicData.quotes.USD.price}</li>			
        </ul>       
    </div>
     )
}
</div>     
        );
    }
}
}

export default Market;