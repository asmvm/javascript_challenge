
// Assign the data from `data.js` to a descriptive variable
var sightings = data;


// Select the button
var button = d3.select("#filterbutton");
var resetButton = d3.select(".btn-outline-success")


// Select the form
var form = d3.select("#form");

// Create event handlers for: 
//datetime filter
button.on("click", runDatetime);
form.on("submit",runDatetime);


// //city filter
// button.on("click", runCity);
// form.on("submit",runCity);

// //state filter
// button.on("click", runState);
// form.on("submit",runState);

//reset filter
resetButton.on("click", reset);

function reset() {
  tbody.html("");
  d3.event.preventDefault();
  data.forEach(UFOsightings);
};

// Complete the event handler function for the form
function runDatetime() {  
  //Clear the table when running function
  tbody.html("");   
  // Prevent the page from refreshing
  d3.event.preventDefault();  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#formGroupExampleInput");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // Print to console and verify date is selected
  console.log(inputValue); 
  // Create filter for user input 
  var filteredData = sightings.filter(sight => sight.datetime === inputValue);
  // Record filter is working properly in console
  console.log(filteredData);
  // Use same function from app.js to build table and apply to filteredData
  filteredData.forEach(UFOsightings);  
};

// function runCity() {  
//   //Clear the table when running function
//   tbody.html("");   
//   // Prevent the page from refreshing
//   d3.event.preventDefault();  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#formGroupExampleInput");
//   // Get the value property of the input element
//   var inputValue = inputElement.property("value").toLowerCase();
//   // Print to console and verify date is selected
//   console.log(inputValue); 
//   // Create filter for user input 
//   var filteredData = sightings.filter(sight => sight.city === inputValue);
//   // Record filter is working properly in console
//   console.log(filteredData);
//   // Use same function from app.js to build table and apply to filteredData
//   filteredData.forEach(UFOsightings);  
// };

// function runState() {  
//   //Clear the table when running function
//   tbody.html("");   
//   // Prevent the page from refreshing
//   d3.event.preventDefault();  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#formGroupExampleInput");
//   // Get the value property of the input element
//   var inputValue = inputElement.property("value").toLowerCase();
//   // Print to console and verify date is selected
//   console.log(inputValue); 
//   // Create filter for user input 
//   var filteredData = sightings.filter(sight => sight.state === inputValue);
//   // Record filter is working properly in console
//   console.log(filteredData);
//   // Use same function from app.js to build table and apply to filteredData
//   filteredData.forEach(UFOsightings);  
// };


