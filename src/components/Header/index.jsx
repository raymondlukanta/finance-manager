import React, { Component } from 'react';
import { Link } from 'react-router';
import { Image, Navbar, NavItem, ListGroup, Row } from 'react-bootstrap';

import { styles } from './styles.scss';

const companyIcon = require('./files/5.png');

export class Header extends Component {
  render() {
    return (
      <div className={`${styles}`}>
        <div className="header">
        <div>
        <img src={ companyIcon } className="company-icon"/>
        </div>
        </div>
      </div>
    );
  };
}
