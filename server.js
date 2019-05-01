const express = require('express');
const app = express();

app.use(express.static('static_files'));

/*
const vaccineDB = {
  "Hepatitis B": {"starting age": "birth", "ending age": "18 months", "number of doses": "3"},
  "Rotavirus": {"starting age": "2 months", "ending age": "6 months", "number of doses": "2"},
  "Diptheria": {"starting age": "2 months", "ending age": "6 years", "number of doses": "4"},
  "Tetanus": {"starting age": "2 months", "ending age": "6 years", "number of doses": "4"},
  "Haemophilys influenzae type b": {"starting age": "2 months", "ending age": "15 months", "number of doses": "3"},
  "Pneumococcal conjugate": {"starting age": "2 months", "ending age": "15 months", "number of doses": "4"},
  "Inactivated poliovirus": {"starting age": "2 months", "ending age": "6 years", "number of doses": "3"},
//  "Influenza": {"starting age": "6 months", "ending age": "", "number of doses": "1"},
  "Varicella": {"starting age": "12 months", "ending age": "6 years", "number of doses": "2"},
  "Hepatitis A": {"starting age": "12 months", "ending age": "6 years", "number of doses": "2"},
  "Measles": {"starting age": "12 months", "ending age": "6 years", "number of doses": "2"}

};
*/


// GET a list of all vaccines
/*app.get('/allVaccines', (req, res) => {
  database.ref
  const allVaccines = Object.keys(vaccineDB); // returns a list of object keys
  console.log('all vaccines is:', allVaccines);
  res.send(allVaccines);
});

app.get('/hideAllVaccines', (req, res) => {
  res.send({});
}); 
*/

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});