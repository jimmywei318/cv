$(document).ready(function () {
    console.log('js loaded');

//    d3.select("body").append('p');
//
//    d3.select("body")
//        .append("svg").attr("width", 50).attr("height", 50)
//        .append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");

    var theData=[1,2,3,4,5,6]
    var p = d3.select('body').selectAll('p')
    .data(theData)
    .enter()
    .append('p')
    .text(function(d){return d;});
});
