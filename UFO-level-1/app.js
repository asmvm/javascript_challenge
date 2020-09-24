// // Get a reference to the table body
var tbody = d3.select("tbody");

// // Console.log the UFO data from data.js
console.log(data);

// // // Step 1: Loop Through `data` and console.log each UFO sighting object
function UFOsightings(aliens) {
    console.log(aliens);
};
data.forEach(UFOsightings);

// // // Step 2:  Use d3 to append one table row `tr` for each UFO sighting object
// // // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// function UFOsightings(aliens) {
//     console.log(aliens);
//     var row = tbody.append("tr");
// };

// // // Step 3:  Use `Object.entries` to console.log each UFO sighting value
// function UFOsightings(aliens) {
//     // console.log(aliens);
//     var row = tbody.append("tr");
//     Object.entries(aliens).forEach(function([key, value]) {console.log(key, value);
//     });
// };

  
// // Step 4: Use d3 to append 1 cell per sighting (datetime, city, state, country, duration, comments)
// function UFOsightings(aliens) {
//     // console.log(aliens);
//     var row = tbody.append("tr");
//     Object.entries(aliens).forEach(function([key, value]) {
//         console.log(key, value);
//         var cell = row.append("td");
//     });
// };

// // Step 5: Use d3 to update each cell's text with
// // weather report values (datetime, city, state, country, shape, durationMinutes, comments)
function UFOsightings(aliens) {
    // console.log(weather);  
    var row = tbody.append("tr");
    Object.entries(aliens).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });    
};
data.forEach(UFOsightings);

