
import html from '../../templates/helpers';

const template = (context) => {
  return new Promise((resolve) => {
    resolve(html`
    <br/>
      <h5 class="card-title">Tell us how you feel.</h5>
      <br/>
      <div class="card-text">
        <form>
          <div class="form-group">
            <label for="input-feel">
              We will try to recognize your symptoms using Natural Language Processing algorithms.
            </label>
            <textarea placeholder="e.g. I got headache" class="form-control" id="input-feel" rows="4"></textarea>
          </div>
        </form>
        <p></p>
        <ul class="list-unstyled" id="observations">
        </ul>
        <p class="text-muted small">
          
        </p>
        <p class="text-muted small">
          
        </p>
      </div>
    `);
  });
};

export default template;
