import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    handleClick = () => {
        this.props.history.push("/markettrend");
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
        <div>
            <div className="jumbotron">
            <h1 className="display-4">Y-Trendz Portal</h1>
                      <p className="lead">
            You have entered the member portal,{' '}
            <Link to="/staff">click here</Link>
          </p>
          <button className="btn btn-dark btn-lg" onClick={this.logout}>
            Logout
          </button>
          
        </div>
        <button className="btn btn-dark btn-lg" onClick={this.handleClick}>
        Market Trendz
     </button>
     </div>
      ) : (
        <div>
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