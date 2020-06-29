// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for datetime, city, state, country, shape, duration and comment.
// Connection to data
let tableData = data;
// Select table body to fill with data
let tablebody = d3.select('tbody');
// Choose form for filtering data
let UFOform = d3.select('.form-group');
// Select the button for filtering data
let UFObutton = d3.select('#filter-btn');
// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
// Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings
// Filter table
UFObutton.on('click', runEnter);
function runEnter() {
    d3.event.preventDefault();
// Select date between 1/1/2010 and 1/13/2010
    let UFOdate = d3.select('#datetime');
    let UFOfilteredDate = UFOdate.property('value');
// Set filter city
    let UFOcity = d3.select('#city');
    let UFOfilteredCity = UFOcity.property('value');
// Select state  
    let UFOstate = d3.select('#state');
    let UFOfilteredState = UFOstate.property('value');
// Select country  
    let UFOcountry = d3.select('#country');
    let UFOfilteredCountry = UFOcountry.property('value');
// Select shape  
    let UFOshape = d3.select('#shape');
    let UFOfilteredShape = UFOshape.property('value');
// Select table
    let checker = false;
    let filterTableData =tableData;
// Filter date excluding blank
    if (UFOfilteredDate !== ''){
        filterTableData = filterTableData.filter(UFO => UFO.datetime === UFOfilteredDate);
        checker = true;
    };  
    tablebody.html('');
// Filter city excluding blank 
    if (UFOfilteredCity !== ''){
        filterTableData = filterTableData.filter(UFO => UFO.city === UFOfilteredCity);
        checker = true;
    };
    tablebody.html('');
// Filter state excluding blank
    if (UFOfilteredState !== ''){
        filterTableData = filterTableData.filter(UFO => UFO.state === UFOfilteredState);
        checker = true;
    };
    tablebody.html('');
// Filter country excluding blank
    if (UFOfilteredCountry !== ''){
        filterTableData = filterTableData.filter(UFO => UFO.country === UFOfilteredCountry);
        checker = true;
    };
    tablebody.html('');
// Filter shape excluding blank 
    if (UFOfilteredShape !== ''){
        filterTableData = filterTableData.filter(UFO => UFO.shape === UFOfilteredShape);
        checker = true;
    };
    tablebody.html('');
// Fill table  
    if (checker = true){
        filterTableData.forEach((UFOfinalTable) => {
            let UFOrow = tablebody.append('tr');
            Object.entries(UFOfinalTable).forEach(([key, value]) => {
              let UFOcell = UFOrow.append('td');
              UFOcell.text(value);
            });
          });
        };  
      };