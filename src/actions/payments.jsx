import keyMirror from 'keymirror';

export const PaymentActionTypes = keyMirror({
  CHANGE_PAYMENT_METHOD: null
  })

export function changePaymentMethod(paymentId) {
  return {
    type: PaymentActionTypes.CHANGE_PAYMENT_METHOD,
    id: paymentId
  };
}

