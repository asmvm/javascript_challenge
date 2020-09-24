// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each UFO sighting object
function UFOsightings(aliens) {
    console.log(aliens);
};
data.forEach(UFOsightings);

function UFOsightings(aliens) {
    // console.log(weather);
    
    // Step 2:  Use d3 to append one table row `tr` for each UFO sighting object
    var row = tbody.append("tr");
    // Step 3:  Use `Object.entries` to console.log each UFO sighting value
    Object.entries(aliens).forEach(function([key, value]) {
        // console.log(key, value);
        // Step 4: Use d3 to append 1 cell per sighting 
        var cell = row.append("td");
        // Step 5: Use d3 to update each cell's text with
        cell.text(value);
    });    
};
data.forEach(UFOsightings);


