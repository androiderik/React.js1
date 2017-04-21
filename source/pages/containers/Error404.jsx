import React, { Component } from 'react';
import { Link } from 'react-router';

class Error404 extends Component {
  render() {
    return (
      <section name="error404">
        <h1>Error 404 NIGGA</h1>
        <Link to="/">
          BACK TO HOME!!
        </Link>
      </section>
    );
  }
}

export default Error404;
