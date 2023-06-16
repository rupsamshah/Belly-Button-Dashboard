
function init() {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        console.log(data)
        let data_name = data.names
        let dropdown = d3.select("#selDataset")
        data_name.forEach(element => {
            dropdown.append("option")
            .text(element)
            .property("value", element)
        });
    });
};

init();


function optionChanged(sampleID) {

};

function populateDemographic(cases)
{
//load the data on json file, pulling data.metadata into casesDemoInfo
    d3.json("samples.json").then((data) =>{
        let casesDemoInfo = data.metadata;
//filter casesDemoInfo based on the case
        let response = casesDemoInfo.filter(casesList => casesList.id == cases);
//access the first case data 
        let responseList = response[0];
//clear the output
        d3.select("#selDataset").html("");
//populate the demographic info with value key pairs
        Object.entries(responseList).forEach(([key,value]) => {
//append the info obtained to the id #sample-metadata on the html index
        d3.select("#selDataset")
//text added as h6 heading
            .append("h6").text(`${key}:${value}`);  
        });
});
}