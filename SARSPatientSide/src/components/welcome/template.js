const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
    <br/>
    <h5 class="card-title text-center">Welcome to Symptom Checker</h5>
    <br/>
    <div class="card-text">
      <p>
      Welcome to Symptom Checker! Now relax at home and do 
      self checkups for any kind of disease. This has been made as an 
      initiative to promote social distancing and so that you don't have to 
      go out of your homes for checkups. Stay home, Stay safe!
      <br/>
      <br/>
      Click on Next to continue...
      
      <br/>
      <br/>

    </div>
    `);
  });
};

export default template;
