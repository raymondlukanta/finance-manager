import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Image, Row } from 'react-bootstrap';
import { styles } from './styles.scss';

export class ButtonWithImage extends Component {
  static propTypes = {
    caption: PropTypes.string,
    imageSrc: PropTypes.string
  };

  render() {
    const { 
      caption,
      imageSrc,
      selected
    } = this.props;

    return (
      <div className={`${styles}`}>
        <Row className={selected ? "box-container-selected":"box-container"}>
          <Row>
            <Image src={ imageSrc } className="mask"/>
          </Row>
          <Row className="center-text">{ caption }</Row>
        </Row>
      </div>
    );
  };
}
