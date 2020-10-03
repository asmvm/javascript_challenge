
// Assign the data from `data.js` to a descriptive variable
var sightings = data;
// Select the button
var button = d3.select("#datebutton");
var resetButton = d3.select(".btn-outline-success")
// Select the form
var form = d3.select("#form");
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
resetButton.on("click", reset);


// Complete the event handler function for the form
function runEnter() {  
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

  if (inputValue > sightings.datetime){
    function alertmsg() {alert("Oops!");}
  }

  // Create filter for user input 
  var filteredData = sightings.filter(sight => sight.datetime === inputValue);
  // Record filter is working properly in console
  console.log(filteredData);

  // Use same function from app.js to build table and apply to filteredData
  filteredData.forEach(UFOsightings);
  
  
};

function reset() {
  
  tbody.html("");

  d3.event.preventDefault();
  
  data.forEach(UFOsightings);
};
