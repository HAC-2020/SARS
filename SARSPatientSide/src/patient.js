/* eslint-disable indent */
import _ from 'lodash';

export default class Patient {
    constructor() {
        this.symptoms = {};
        this.sex = 'male';
        this.age = 30;
        this.pin = null;
        this.displayData = null;
        this.name = '';
        this.triage = '';
        this.bg = '';
    }

    setBg(bg) {
        this.bg = bg;
    }

    setTriage(triage) {
        this.triage = triage;
    }

    setDisplayData(data) {
        this.displayData = data;
    }

    setName(name) {
        this.name = name;
    }

    setPin(pin) {
        this.pin = pin;
    }

    setSex(sex) {
        this.sex = sex;
    }

    setAge(age) {
        this.age = age;
    }

    addSymptomsGroup(group) {
        Object.assign(this.symptoms, group);
    }

    removeSymptom(id) {
        delete this.symptoms[id];
    }

    toDiagnosis() {
        const res = {
            sex: this.sex,
            age: this.age,
            evidence: [],
            extras: {
                enable_triage_5: true
            }
        };

        res.evidence = _.map(this.symptoms, (symptom, symptomId) => {
            const getChoiceId = (choice) => {
                if (choice === true) {
                    return 'present';
                }
                if (choice === false) {
                    return 'absent';
                }
                return 'unknown';
            };

            const diagnosisSymptom = {
                id: symptomId,
                choice_id: getChoiceId(symptom.reported)
            };

            if (symptom.initial) {
                Object.assign(diagnosisSymptom, {
                    initial: true
                });
            }

            if (symptom.related) {
                Object.assign(diagnosisSymptom, {
                    related: true
                });
            }

            return diagnosisSymptom;
        });
        return res;
    }

    toSuggest() {
        return {
            sex: this.sex,
            age: this.age,
            selected: _.filter(_.keys(this.symptoms), (key) => {
                return this.symptoms[key].reported === true;
            })
        };
    }

    reset() {
        this.symptoms = {};
    }
}
