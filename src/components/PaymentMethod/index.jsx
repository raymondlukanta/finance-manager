import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Image, Row } from 'react-bootstrap';
import { styles } from './styles.scss';

const checkListIcon = require('./files/checklist.png');


export class PaymentMethod extends Component {
  static propTypes = {
    caption: PropTypes.string,
    imageSrc: PropTypes.string,
    selected: PropTypes.bool,
  };

  render() {
    const { 
      caption,
      imageSrc,
      selected,
      id
    } = this.props;

    return (
      <div className={`${styles}`}>
        <Row className="box-container">
          <Col xs={2} md={2} sm={2} lg={1}>
            <Image src={ imageSrc } className="mask"/>
          </Col>
          <Col xs={2} md={2} sm={2} lg={10}>
            <div className="caption">{ caption }</div>
          </Col>
          <Col xs={2} md={2} sm={2} lg={1}>
            {selected && <Image src={ checkListIcon } className="checklist-icon"/>}
          </Col>
        </Row>
      </div>
    );
  };
}
