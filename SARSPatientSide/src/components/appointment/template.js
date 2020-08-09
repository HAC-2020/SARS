/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable no-multi-spaces */
/* eslint-disable switch-colon-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import axios from 'axios';

const template = (context) => {
    const send = () =>
        axios.post('https://young-hamlet-78816.herokuapp.com/record', {
            date: Date.now(),
            pin: context.patient.pin,
            disease: context.patient.displayData,
            triageLevel: context.patient.triage,
            bloodGrp: context.patient.bg
        });

    return new Promise((resolve) => {
        send();
        let res = 'Details: ';
        switch (context.patient.triage) {
            case 'emergency_ambulance':
                res += `The reported symptoms are very serious and the 
      patient may require emergency care. The patient should call an ambulance right now.`;
                break;
            case 'emergency':
                res += `The reported evidence appears serious and the patient should go to an emergency 
      department. If the patient can't get to the nearest emergency department, 
      he/she should call an ambulance.`;
                break;
            case 'consultation_24':
                res += `The patient should see a doctor within 24 hours. 
      If the symptoms suddenly get worse, the patient should go to 
      the nearest emergency department .`;
                break;
            case 'consultation':
                res += `The patient may require medical evaluation and may need to 
      schedule an appointment with a doctor. If symptoms get worse, the 
      patient should see a doctor immediately.`;
                break;
            case 'self_care':
                res += `A medical consultation is advised but not strictly required; 
      the patient should observe their symptoms and consult a doctor if 
      symptoms worsen within 24 hours.`;
                break;
            default:
                res = '';
        }
        resolve(`
    <br/>
      <h5 class="card-title text-center">${context.patient.name}, your data has been 
      successfully sent to the affiliated hospital.</h5>
      <br/>
      <div class="card-text">
        <p>
        The hospital will contact you according to the emergency level.
        <br/>
        Your Details:
        <br/>
        <div class="row">
    <div class="col-sm-3">
    Mobile Number
    </div>
    <div class="col-sm-4">
    : ${context.patient.pin}
    </div>
</div>        
        <div class="row">
    <div class="col-sm-3">
    Age
    </div>
    <div class="col-sm-4">
    : ${context.patient.age}    </div>
</div>   <div class="row">
<div class="col-sm-3">
Sex
</div>
<div class="col-sm-4">
: ${context.patient.sex}    </div>
</div> <div class="row">
<div class="col-sm-3">
Blood Group:
</div>
<div class="col-sm-4">
: ${context.patient.bg}
</div>
</div><div class="row">

<div class="col-sm-3">
Disease detected
</div>
<div class="col-sm-4">
: ${context.patient.displayData}    </div>
</div> <br/><div class="row">
<div class="col-sm-10">
${res} </div>
</div> 
        Click on Next to exit...
        
      </div>
      
    `);
    });
};

export default template;
