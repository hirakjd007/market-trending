import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import image from './profile_icon.png';

class Staff extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
      console.log(this.state);
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div  >
        <Card >
        <Image alt='icon'circular src={image}/>
        <Card.Content>
          <Card.Header>
            <h2>
            {currentUserName}
            </h2>
      </Card.Header>
          <Card.Meta>
            <span>
              {currentUserEmail}
        </span>
          </Card.Meta>
          <Card.Description>
           Hirak is a very cool person
      </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
           Envestnet Yodlee
      </a>
        </Card.Content>
      </Card>
      </div>
    );
  }
}

export default Staff;