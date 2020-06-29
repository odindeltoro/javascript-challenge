// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for datetime, city, state, country, shape, duration and comment.
// Connection to data
let tableData = data;
// Review connection to console
console.log(tableData);
// Select table body to fill with data
let tablebody = d3.select('tbody');
// UFO Sighting values for each column
tableData.forEach(function(UFO) {
    console.log(UFO);
// Append to table body a row for each UFO
    let UFOrow = tablebody.append('tr');
// Set UFO values to the table
    Object.entries(UFO).forEach(function([key, value]) {
      console.log(key, value);
// Append a cell to the row for each value
      let UFOcell = UFOrow.append('td');
      UFOcell.text(value);
    });
});

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
// Select the button for filtering date
let UFObutton = d3.select('#filter-btn');
UFObutton.on('click', function() {
    tablebody.html('');
// Select date between 1/1/2010 and 1/13/2010
    let UFOdate = d3.select('#datetime');
// Get the values from chosen date
    let UFOvalues = UFOdate.property('value');
    console.log(UFOvalues);
// Filter data by chosen date
    let UFOfiltered = tableData.filter(UFO => UFO.datetime === UFOvalues);
    console.log(UFOfiltered);
    UFOfiltered.forEach(function(selections) {
    console.log(selections);
// Append to table body a row for each UFO with chosen date
    let UFOrow = tablebody.append('tr');
// Set UFO values to the table
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
// Append a cell to the row for each value
        let UFOcell = UFOrow.append('td');
        UFOcell.text(value);
    });
});
});



