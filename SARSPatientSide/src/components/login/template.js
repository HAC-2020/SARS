/* eslint-disable linebreak-style */

const template = (context) => {
  return new Promise((resolve) => {
    context.patient.setPin(null);
    resolve(`
        
        <br/>
        <div class="card-text">
          <form>
            <div class="form-group row">
              <label for="input-pin" class="col-sm-2 col-form-label">Phone Number:</label>
              <div class="col-sm-2">
                <input class="form-control" id="input-pin">
              </div>
            </div>
          </form>
          <p class="text-muted small">
            </p>
        </div>
      `);
  });
};

export default template;
