
import View from '../../base/view';
import template from './template';

export default class SummaryView extends View {
  constructor(el, context) {
    const getExplanationMarkup = (data1, data2) => {
      console.log(data2);
      let supporting = '';
      let conflicting = '';

      for (const e of data1.supporting_evidence) {
        supporting += `<li><i class="text-success fa fa-fw fa-plus-circle"></i> ${e.common_name}</li>`;
      }

      for (const e of data1.conflicting_evidence) {
        conflicting += `<li><i class="text-danger fa fa-fw fa-minus-circle"></i> ${e.common_name}</li>`;
      }

      context.patient.setTriage(data2.triage_level);
      const base = `
        <div class="row">
          <div class="col-6">
            <span class="badge badge-success"><i class="fa fa-fw fa-thumbs-up"></i>Evidence for</span>
            <ul class="list-unstyled">
              ${supporting}
            </ul>
          </div>
          <div class="col-6">
            <span class="badge badge-danger"><i class="fa fa-fw fa-thumbs-down"></i>Evidence against</span>
            <ul class="list-unstyled">
              ${conflicting}
            </ul>
          </div>
          <div class="alert alert-warning" role="alert">
          <i class="fa fa-info-circle"></i>
          Teleconsultaion Applicable: ${data2.teleconsultation_applicable}
          <div><i class="fa fa-info-circle"></i> Triage Level: ${data2.triage_level}</div>
          <div>
          </div>
        </div>
        </div>
       `;
      return base;
    };

    const handleExplainRequested = (e) => {
      e.preventDefault();
      const {id} = e.target.dataset;
      const el = e.target.parentNode.parentNode.querySelector('.explanation');

      if (!el.innerHTML) {
        el.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i> one second..';
        context.api.explain(Object.assign(context.patient.toDiagnosis(), {target: id}))
          .then((data) => {
            return data;
          }).then((data1) => {
            // eslint-disable-next-line promise/no-nesting
            context.api.triage(Object.assign(context.patient.toDiagnosis()))
              .then((data2) => {
                el.innerHTML = getExplanationMarkup(data1, data2);
                return el.innerHTML;
              });
            return '';
          });
      } else {
        el.innerHTML = '';
      }
    };

    const binds = {
      '.explain': {
        type: 'click',
        listener: handleExplainRequested
      }
    };

    super(el, template, context, binds);
  }
}
