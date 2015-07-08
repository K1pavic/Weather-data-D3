function cd_graph_sun() {

document.getElementById("btn_cd")
.style.color = "#000000";

document.getElementById("btn_min")
.style.color = "#ffffff";	
document.getElementById("btn_rain")
.style.color = "#ffffff";	
document.getElementById("btn_max")
.style.color = "#ffffff";	

document.getElementById("btn_sun")
.style.color = "#000000";	
   
d3.select("#graph").select("svg").remove();

var data = [{godina: 1977, sun: 109.083333333333},
{godina: 1978, sun: 122.8},
{godina: 1979, sun: 122.066666666667},
{godina: 1980, sun: 112.7},
{godina: 1981, sun: 123.75},
{godina: 1982, sun: 113.841666666667},
{godina: 1983, sun: 134.208333333333},
{godina: 1984, sun: 117.725},
{godina: 1985, sun: 114.875},
{godina: 1986, sun: 126.083333333333},
{godina: 1987, sun: 118.4},
{godina: 1988, sun: 145.333333333333},
{godina: 1989, sun: 142.008333333333},
{godina: 1990, sun: 128.133333333333},
{godina: 1991, sun: 121.358333333333},
{godina: 1992, sun: 113.933333333333},
{godina: 1993, sun: 131.358333333333},
{godina: 1994, sun: 147.05}]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1976,1997]).range([0, width]);
var y = d3.scale.linear().domain([100, 150]).range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(5).tickFormat(d3.format('0f'));

var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(5).tickSubdivide(true);

var valueline = d3.svg.line().interpolate("linear")
.x(function(d,i) { 
    console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
    return x(d.godina);
})
.y(function(d) { 
    console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
    return y(d.sun); 
})

// Define the div for the tooltip
var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

// Adds the svg canvas
var svg = d3.select("#graph")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

// Add the valueline path.
svg.append("path")
    .attr("class", "line")
    
    .style('stroke','orange')
    .style('stroke-width', '3px')
    
    .attr("d", valueline(data));

// Add the scatterplot
svg.selectAll("dot")	
    .data(data)			
.enter().append("circle")								
    .attr("r", 3)
    .attr("fill",'orange')
    .attr("stroke",'orange')		
    .attr("cx", function(d) { return x(d.godina); })		 
    .attr("cy", function(d) { return y(d.sun); })		
    .on("mouseover", function(d) {		
        div.transition()		
            .duration(200)		
            .style("opacity", .9);		
        div	.html("year:"+(d.godina) +  "<br/>"  + d.sun +" "+"days")	
            .style("left", (d3.event.pageX) + "px")		
            .style("top", (d3.event.pageY - 28) + "px");	
        })					
    .on("mouseout", function(d) {		
        div.transition()		
            .duration(500)		
            .style("opacity", 0);	
    });

// Add the X Axis
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

// Add the Y Axis
svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);


// U izradi korišten tutorial: http://bl.ocks.org/d3noob/a22c42db65eb00d4e369

}