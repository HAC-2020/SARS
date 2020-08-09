/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable arrow-parens */
/* eslint-disable promise/always-return */

import axios from 'axios';
import settings from './settings';

import template from './templates/base';

import App from './base/app';
import DemoController from './controller';
import InfermedicaApi from './infermedica-api';
import Patient from './patient';

require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');

require('./styles/styles.css');

export default class DemoApp extends App {
    constructor(el) {
        super(el, template);

        this.api = new InfermedicaApi(settings['app-id'], settings['app-key']);

        this.patient = new Patient();

        this.currentStep = 0;

        this.views = [
            {
                context: {
                    patient: this.patient
                },
                view: 'login'
            },
            {
                context: {
                    api: this.api,
                    patient: this.patient
                },
                view: 'welcome'
            },
            {
                context: {
                    patient: this.patient
                },
                view: 'basic'
            },
            {
                context: {
                    api: this.api,
                    patient: this.patient
                },
                view: 'nlp'
            },
            {
                context: {
                    api: this.api,
                    patient: this.patient
                },
                view: 'common-risks'
            },
            {
                context: {
                    api: this.api,
                    patient: this.patient
                },
                view: 'suggest'
            },
            {
                context: {
                    api: this.api,
                    patient: this.patient
                },
                view: 'geo-risks'
            },
            {
                context: {
                    api: this.api,
                    patient: this.patient
                },
                view: 'question'
            },
            {
                context: {
                    api: this.api,
                    patient: this.patient
                },
                view: 'summary'
            },
            {
                context: {
                    api: this.api,
                    patient: this.patient
                },
                view: 'appointment'
            }
        ];
    }

    afterRender() {
        this.nextButton = this.el.querySelector('#next-step');
        this.nextButton.addEventListener('click', (e) => this.nextStep(e));
    }

    startInterview() {
        this.controller = new DemoController(
            this.el.querySelector('#step-container')
        );

        const currentView = this.views[this.currentStep];
        this.controller.setView(currentView.view, currentView.context);
    }

    nextStep() {
        if (this.currentStep === 1 && this.patient.pin != null) {
            this.currentStep += 2;
        } else if (this.currentStep === 0 && this.patient.pin != null) {
            const data = () =>
                axios
                    .get(
                        `https://young-hamlet-78816.herokuapp.com/patient/${this.patient.pin}`
                    )
                    .then((res) => {
                        console.log(res);
                        let sex = res.data.gender;
                        if (sex === 'Male') {
                            sex = 'male';
                        } else {
                            sex = 'female';
                        }
                        this.patient.setAge(res.data.age);
                        this.patient.setSex(res.data.gender);
                        this.patient.setName(res.data.name);
                        this.patient.setBg(res.data.bloodGrp);
                        console.log(res.data.bloodGrp);
                    })
                    .catch((err) => {
                        console.log(err);
                    });

            data();
            this.currentStep += 1;
        } else {
            this.currentStep += 1;
        }

        if (this.patient.pin) {
            this.currentStep %= 10;
        } else {
            this.currentStep %= 9;
        }

        const currentView = this.views[this.currentStep];

        this.controller.destroyView();
        this.controller.setView(currentView.view, currentView.context);
    }
}
