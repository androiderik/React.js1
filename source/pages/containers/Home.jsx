import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <section name="Home">
        <h1>HOME</h1>
        <Link to="/about">
          GO TO ABOUT
        </Link>
      </section>
    );
  }
}

export default Home;
