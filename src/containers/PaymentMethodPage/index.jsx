import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Button, Col, Image, Row } from 'react-bootstrap';

import { ButtonWithImage } from 'components/ButtonWithImage';
import { PaymentMethod } from 'components/PaymentMethod';

import { changePaymentMethod } from 'actions/payments';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { styles } from './styles.scss';

const accountIcon = require('./files/account.png');
const bankIcon = require('./files/bank.png');
const bankTransferIcon = require('./files/bankTransfer.png');
const creditCardIcon = require('./files/creditCard.png');
const bcaClickPayIcon = require('./files/bcaClickPay.png');
const epayBriIcon = require('./files/epayBri.png');
const mandiriClickPayIcon = require('./files/mandiriClickPay.png');

var InfiniteScroll = require('react-infinite-scroll')(React);

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

function mapStateToProps(state) {
  const {
    payment: { 
      payment_method: { id }
    },
  } = state;

  return {
    paymentMethodId: id
  };
}

const paymentMethods = 
    [{id:0,
    caption: "TRANSFER BANK",
    imgSrc: bankTransferIcon},
    {id:1,
    caption: "CREDIT CARD",
    imgSrc: creditCardIcon},
    {id:2,
    caption: "BCA KLIKPAY",
    imgSrc: bcaClickPayIcon},
    {id:3,
    caption: "MANDIRI CLICKPAY",
    imgSrc: mandiriClickPayIcon},
    {id:4,
    caption: "E-PAY BRI",
    imgSrc: epayBriIcon}]
  

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({ changePaymentMethod }, dispatch)
)
export class PaymentMethodPage extends Component {
  constructor(props) {
    super(props);
    this._handlePaymentMethodClick = this._handlePaymentMethodClick.bind(this);
  }

  render() {  
    const {
       paymentMethodId
    } = this.props;

    return (
      <section className={`${styles}`}>       
        <DocumentMeta {...metaData} />
    
        <div className="page-container">
          <div className="container">
            <Row className="title">
              Payment Method
            </Row>
            <Row className="subtitle">
              Your order from Moneybag
            </Row>
            <Row>
              <Col lg={5} className="high-layer">
                <ButtonWithImage imageSrc={ accountIcon } caption="Account"/>
              </Col> 
              <Col xsHidden={ true } mdHidden={ true } smHidden={ true } lg={2}>
                <hr/>
              </Col>
              <Col xs={12} md={12} sm={12} lg={5}>
                <ButtonWithImage imageSrc={ bankIcon } caption="Bank & Card" selected={ true }/>
              </Col>
            </Row>
            <Row className="instruction">
              Please select your method of payment:
            </Row>
            { paymentMethods.map((paymentMethod) => <Row onClick={this._handlePaymentMethodClick.bind(this, paymentMethod.id)}> <PaymentMethod key={ paymentMethod.id } caption={ paymentMethod.caption } imageSrc={ paymentMethod.imgSrc } selected={paymentMethod.id == paymentMethodId}/> </Row>) }
            <Row className="bottom-border"/>
            <Row >
              <Button className="rectangle-3" block>Next</Button>
            </Row>
          </div>
        </div>
      </section>
    );
  }

  _handlePaymentMethodClick(id) {
    const {
      changePaymentMethod
    } = this.props;
    changePaymentMethod(id);
    
  }
}
