import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import './MarketCss.css';
export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    handleClick = () => {
        this.props.history.push("/markettrend");
    }
    handleClickYodlee = () => {
      this.props.history.push("/yodleeUserInvestDetail");
  }

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div >
            <div className="jumbotron">
            <h1 className="display-4">Y-Trendz Portal</h1>
                      <p className="lead">
            You have entered the member portal,{' '}
            <Link to="/staff">click here</Link>
          </p>
          <button className="btn btn-dark btn-lg"  onClick={this.logout}>
            Logout
          </button>
          
        </div>
    <div  className="col-sm-6 center">
    A cryptocurrency is a digital asset designed 
          to work as a medium of exchange that uses 
          strong cryptography to secure financial transactions,
          control the creation of additional units, and verify
          the transfer of assets.<br/>
          <br/>
          <button className="btn btn-dark btn-lg center" onClick={this.handleClick}>
          Cryptocurrency Trendz
        </button>
    </div>
    <div  className="col-sm-6 center">
A mutual fund is an investment vehicle made up of a pool of money collected from many investors for the purpose of investing in securities such as stocks, bonds, money market instruments and other assets.<br/>
<br/>
<button className="btn btn-dark btn-lg center" onClick={this.handleClick}>
          Mutual Funds Trendz
        </button>
    </div>
    <div  className="col-sm-6 center">
          It represents the different investment group the users registered with Yodlee have invested their 
          money in.
          <br/>
          <br/>
          <button className="btn btn-dark btn-lg center" onClick={this.handleClickYodlee}>
          Yodlee User Trendz
        </button>
    </div>
      </div>
      ) : (
        <div className="jumbotron">
        <h1 className="display-4">Y-Trendz Portal</h1>
          <p className="lead">
          <h4>
            If you want to be a member, please get your credentials from your
            Y-Trendz Team.
         </h4>
          </p>
          <button className="btn btn-dark btn-lg" onClick={this.login}>
            Login
          </button>
        </div>
      );

      return (
          
        <div>
        <div>
          {mainContent}
        </div>
         
         </div>
      );
    }
  }
);