import React from 'react'
import './MarketCss.css';
import logo from './loading.gif'
class YodleeUserInvestment extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        items: [],
        isLoaded: false,
    }
}

componentDidMount() {
    fetch('http://192.168.113.50:6565/getyodleetrending/stocks')
      .then(Response => Response.json())
        .then(res => {
            console.log(res);
            this.setState({
                isLoaded: true,
                items: res,
            });
        })
        .catch(error => {
            console.log(error)
        })
}

render() {

    var { isLoaded} = this.state;


    if (!isLoaded) {
        return <div>
      <img src={logo} alt="loading..." />
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
            <li><b>{dynamicData.quote}</b></li>
            <li><b>Name</b> {dynamicData.name}</li>
            <li><b>Total Supply</b><br/> {dynamicData.price}</li>	
            <li><b>Price in USD</b> ${dynamicData.currency}</li>			
        </ul>       
    </div>
     )
}
</div>     
        );
    }
}
}

export default YodleeUserInvestment;