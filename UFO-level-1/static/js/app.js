// from data.js
var tableData = data;

//console.log(tableData);

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(etphonehome){
    var row = tbody.append("tr");

    Object.entries(etphonehome).forEach(function([key,value]){
        var cell= tbody.append("td");
        cell.text(value)
  })
})

var button = d3.select("#filter-btn");

button.on("click",function() {

    d3.event.preventDefault();
    
    tbody.html("")
    var inputDate=d3.select("#datetime");
    var inputValue=inputDate.property("value")
    var filteredData=tableData.filter(date=> date.datetime ===inputValue);

    filteredData.forEach(function(etphonehome){

        var row = tbody.append("tr");
        Object.entries(etphonehome).forEach(function([key,value]) {

            var cell = tbody.append("td");
            cell.text(value)

        });
    });
});