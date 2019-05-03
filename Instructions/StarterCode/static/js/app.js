// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;
console.log(tableData);

// Level One Part 2
function table_obj_html_fmt(dataset){
  tbody.text("");
  dataset.forEach((AllUFOData) => {
    var row = tbody.append("tr");
    Object.entries(AllUFOData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

table_obj_html_fmt(tableData);

// Level One Part 3
// Select the submit button
var submit = d3.select("#filter-btn");


// Submit Button handler
function handleSubmit(){
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var filter_Element = d3.select("#datetime")
  // Get the value property of the input element
  var filter_Value =  filter_Element.property("value");
  console.log(filter_Value);

  //Create a new table showing only the filterd data
  var filter_by_datetime = tableData.filter(FilteredUFOData => FilteredUFOData.datetime===filter_Value);
  console.log(filter_by_datetime);
  //Display the new table
  table_obj_html_fmt(filter_by_datetime);
}

// Add event listener for submit button
submit.on("click", handleSubmit);