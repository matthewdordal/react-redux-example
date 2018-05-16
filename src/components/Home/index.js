import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateFirstName, updateLastName } from '../../store/actionCreators/user';

import './Home.css';

class Home extends Component {
  handleFirstNameChange = (event) => {
    this.props.updateFirstName(event.currentTarget.value);
  }

  handleLastNameChange = (event) => {
    this.props.updateLastName(event.currentTarget.value);
  }

  render() {
    const {
      firstName,
      lastName
    } = this.props;


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React - Redux Example</h1>
        </header>
        <p className="App-intro">
          <label for="firstName">First Name:</label> <input id="firstName" type="text" onChange={this.handleFirstNameChange} />
          <p>{firstName}</p>
        </p>
        <p className="App-intro">
          <label for="lastName">Last Name:</label> <input id="lastName" type="text" onChange={this.handleLastNameChange} />
          <p>{lastName}</p>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  const { firstName, lastName } = user;

  return {
    firstName,
    lastName
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateFirstName,
  updateLastName
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
