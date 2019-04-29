// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// YOUR CODE HERE!
tableData.forEach((AllUFOData) => {
    var row = tbody.append("tr");
    Object.entries(AllUFOData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
