import html, {riskHtmlMapper} from '../../templates/helpers';

const template = (context) => {
  return context.api.getRiskFactors().then((risks) => {
    return html`
    <br/>
        <h5 class="card-title">Please check all that apply to you.</h5>
        <br/>
        <div class="card-text " >
          <form>
            ${riskHtmlMapper(risks, context.commonRiskFactors)}
          </form>
          <br/>
          <p class="text-muted small">
            <i class="fa fa-info-circle"></i> To calculate BMI click 
            <a target="_blank" href="https://www.stylecraze.com/tools/bmi-calculator/?embed_id=1">here</a>.
          </p>
        </div>
      `;
  });
};

export default template;
