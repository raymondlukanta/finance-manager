import { PaymentActionTypes } from '../actions/payments'

export default function payment(state = {payment_method:{id: -1}}, action) {
  switch (action.type) {
    case PaymentActionTypes.CHANGE_PAYMENT_METHOD:
      return Object.assign({}, state, {
        payment_method:{
          id: action.id
        }
      })
    default:
      return state
  }
}

