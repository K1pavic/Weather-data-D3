function cd_graph_min() {

document.getElementById("btn_cd")
.style.color = "#000000";

document.getElementById("btn_max")
.style.color = "#ffffff";	
document.getElementById("btn_rain")
.style.color = "#ffffff";	
document.getElementById("btn_sun")
.style.color = "#ffffff";	

document.getElementById("btn_min")
.style.color = "#000000";	
   
d3.select("#graph").select("svg").remove();

var data = [{godina: 1977, temp_min: 6.425},
{godina: 1978, temp_min: 5.96666666666667},
{godina: 1979, temp_min: 6.46666666666667},
{godina: 1980, temp_min: 7.05},
{godina: 1981, temp_min: 6.5},
{godina: 1982, temp_min: 7.25},
{godina: 1983, temp_min: 6.8},
{godina: 1984, temp_min: 6.375},
{godina: 1985, temp_min: 5.95833333333333},
{godina: 1986, temp_min: 6.08333333333333},
{godina: 1987, temp_min: 7.1},
{godina: 1988, temp_min: 7.24166666666667},
{godina: 1989, temp_min: 7.63333333333333},
{godina: 1990, temp_min: 6.775},
{godina: 1991, temp_min: 7.19166666666667},
{godina: 1992, temp_min: 6.8},
{godina: 1993, temp_min: 6.80833333333333},
{godina: 1994, temp_min: 7.69166666666667},
{godina: 1995, temp_min: 6.59166666666667},
{godina: 1996, temp_min: 7.08333333333333},
{godina: 1997, temp_min: 7.66666666666667},
{godina: 1998, temp_min: 6.925},
{godina: 1999, temp_min: 6.86666666666667},
{godina: 2000, temp_min: 6.89166666666667},
{godina: 2001, temp_min: 7.51666666666667}]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1976,2003]).range([0, width]);
var y = d3.scale.linear().domain([4, 9]).range([height, 0]);

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
    return y(d.temp_min); 
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
    
    .style('stroke','crimson')
    .style('stroke-width', '3px')
    
    .attr("d", valueline(data));

// Add the scatterplot
svg.selectAll("dot")	
    .data(data)			
.enter().append("circle")								
    .attr("r", 3)
    .attr("fill","crimson")
    .attr("stroke","crimson")		
    .attr("cx", function(d) { return x(d.godina); })		 
    .attr("cy", function(d) { return y(d.temp_min); })		
    .on("mouseover", function(d) {		
        div.transition()		
            .duration(200)		
            .style("opacity", .9);		
        div	.html("year:"+(d.godina) +  "<br/>"  + d.temp_min +" "+"&#8451")	
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