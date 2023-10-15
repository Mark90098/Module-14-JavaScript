//This URL was given, leads to big json file with data for this assignment
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);

  //this is how to access data in console log. Has to be right after fetching the data.
  //defining name variable as names array
let name = data.names
  console.log(name)

  //using d3 library to select this id in HTML file
  let dropdownMenu = d3.select("#selDataset");
  // let dataset = dropdownMenu.property("value");

  //runs a for loop through the names array and appends each value to HTML dropdown menu
name.forEach((id)=>{

    //need to define it as an option because it's a dropdown menu
dropdownMenu.append("option").text(id).property("value")
})

//this calls optionChanged functino below
optionChanged(name[0])
});

//Defining optionChanged function. HTML file calls this function so it needs to be defined. It does nothing but call another function
function optionChanged(name_id){
  metadata(name_id)
}

//this function populates demographic section. Uses person id from dropdown menu as input and gives demographic info as output
function metadata(id_test){

  //need to fetch data again and only get metadata object
  d3.json(url).then(function(data) {
    let metadata = data.metadata
    console.log(metadata)

    //filtering metadata to only be for the person id selected in dropdown menu
   let filter_metadata = metadata.filter(row=>row.meta_id==id_test)
   firstresult = filter_metadata[0]
   console.log(firstresult)
   ////select sample-metadata class/id in HTML file and append demographic infor for a given person id
    // let demographic_data = d3.select("#sample-metadata");
    // Object.entries(filter_metadata[0]).forEach(([key,value])=>{
    //   demographic_data.append("p").text(`${key}, ${value}`)
    // })
})}



// // Trace for the Data
// let trace1 = {
//   x: data.map(row => row.id),
//   y: data.map(row => row.sample_values),
//   type: "bar"
// };