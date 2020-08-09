/* eslint-disable linebreak-style */


import View from '../../base/view';
import template from './template';

export default class LoginView extends View {
  constructor(el, context) {
    const handlePinChange = (e) => {
      this.context.patient.setPin(e.target.value);
    };

    const binds = {
      '#input-pin': {
        type: 'change',
        listener: handlePinChange
      }
    };

    super(el, template, context, binds);
    this.context.patient.reset();
  }
}
