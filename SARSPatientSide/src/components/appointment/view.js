/* eslint-disable linebreak-style */


import View from '../../base/view';
import template from './template';

export default class AppointmentView extends View {
  constructor(el, context) {
    super(el, template, context, null);

    this.context.api.generateInterviewId();
  }
}
