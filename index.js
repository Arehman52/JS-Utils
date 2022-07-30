// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

appDiv.innerHTML = `
<h1>JS Mapper Functions</h1>
<br>
<p>Open the console to see the results. This mapper function transforms the keys of one object or array of object according to the keys provided in the mappingConfigs object. for each key/value in mappingConfigs, this function will look for the same key value pairs in the response parameter.</p>
<p> in this example, first parameter i.e. { abc: 'Usman', xyz: 'Mustafa' },
{ abc: 'Ali', xyz: 'Mustafa' },
] is array of 2 objects and second parameter i.e. { abc: 'firstName', xyz: 'lastName' }  is the mappingConfigs. so from mappingConfigs it will replace firstName and lastName against each of the abc and xyz entries in the response array of objects.</p>
`;
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
