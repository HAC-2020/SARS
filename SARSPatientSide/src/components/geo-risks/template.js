import html, {riskHtmlMapper} from '../../templates/helpers';

const template = (context) => {
  return context.api.getRiskFactors().then((risks) => {
    return html`
    <br/>
      <h5 class="card-title">Please select where you live or have recently traveled to.</h5>
      <br/>
      <div class="card-text">
        <form>
          ${riskHtmlMapper(risks, context.locationRiskFactors)}
        </form>
      </div>
    `;
  });
};

export default template;
