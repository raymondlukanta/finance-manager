import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Button, Checkbox, Col, Image, Input, Row } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { styles } from './styles.scss';

const metaData = {
  title: TitleMetaContent,
  description: DescriptionMetaContent,
  meta: {
    charset: 'utf-8',
    name: {
      keywords: KeywordsMetaContent,
    },
  },
};

export class CreditCardPage extends Component {
  render() {  
    return (
      <section className={`${styles}`}>       
        <DocumentMeta {...metaData} />
    
        <div className="page-container">
          <div className="container">
            <Row className="title">
              Order #12305
            </Row>
            <Row className="subtitle">
              Nike Internationalist - Tech Black
            </Row>
            <Row className="bottom-border"/>
            <Row className="total-amount">
              IDR 285.000
            </Row>
            <Row className="instruction">
              Please provide your credit card details:
            </Row>
            <form>
              <Input type="text" placeholder="credit card number"/>
              <Row>
                <Col xs={12} md={12} sm={12} lg={8}>
                  <Input type="select" >
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </Input>
                </Col>
                <Col xs={12} md={12} sm={12} lg={4}>
                  <Input type="select" >
                    <option value="1">2016</option>
                    <option value="2">2017</option>
                    <option value="3">2018</option>
                    <option value="4">2019</option>
                    <option value="5">2020</option>
                  </Input>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} sm={12} lg={4}>
                  <Input type="text" placeholder="CVV"/>  
                </Col>
                <Col xs={12} md={12} sm={12} lg={8}>
                  3 or 4 digits code
                </Col>
              </Row>
              <Row className="bottom-border"/>
              <Input type="checkbox">
                Remember me
              </Input>

            </form>
            <Row >
              <Button className="rectangle-3" block>PAY NOW</Button>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}
