// Import the data from data.js
const tableData = data;
var tbody = d3.select("tbody");

// Building table function
function buildTable(data){
    // Clearing out any existing data
    tbody.html("");

    // Loop through each object from array and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");                   // JavaScript finds tbody tag in HTML, and add a table row "tr". This table row is named 'row'
        
        // Loop through each properties in the object (dataRow) and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {       // Referencing each value of objects from the array
            let cell = row.append("td")                 // JavaScript finds row tag in HTML, and add a table data cell "td". This is named 'cell'
            cell.text(val);                             // Extracting text from val, and chain to cell variable
        }
        );
    }
    );
}

function handleClick(){
    // Grab the datetime value from the filter
    let date = d3.select('#datetime').property("value"); // Telling D3 to look for #datetime id in HTML tag. Grab date value and hold it in "date" variable
    let filteredData = tableData;                        // Set a default filter and save to variable filteredData

    // Check to see if a date was entered and filter the data using that date
    if (date){

        // Apply filter to the table data to only keep the rows where the datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Building table using filtered data. If there was no filter, then it will be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);