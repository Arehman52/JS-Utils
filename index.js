// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

appDiv.innerHTML = `<h1>JS Starter</h1><br>`;
console.log("NOW: ",mapper(
  [
    { abc: 'Usman', xyz: 'Mustafa' },
    { abc: 'Ali', xyz: 'Mustafa' },
  ],
  { abc: 'firstName', xyz: 'lastName' }
));

function mapper(response, mappingConfigs) {
  var mapped = [];
  if (response) {
    response.forEach((value, index, array) => {
      let obj = {};
      Object.keys(mappingConfigs).forEach((key) => {
        if(value.hasOwnProperty(key)){
          obj[mappingConfigs[key]] = value[key];
        }
      });
      mapped.push(obj);
    });
  }
  return mapped;
}
