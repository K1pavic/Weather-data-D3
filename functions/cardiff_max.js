function cd_graph_max() {

document.getElementById("btn_cd")
.style.color = "#000000";

document.getElementById("btn_min")
.style.color = "#ffffff";	
document.getElementById("btn_rain")
.style.color = "#ffffff";	
document.getElementById("btn_sun")
.style.color = "#ffffff";	

document.getElementById("btn_max")
.style.color = "#000000";	
   
d3.select("#graph").select("svg").remove();

var data = [{godina: 1977, temp_max: 13.575},
{godina: 1978, temp_max: 13.125},
{godina: 1979, temp_max: 14.05},
{godina: 1980, temp_max: 13.9},
{godina: 1981, temp_max: 14.075},
{godina: 1982, temp_max: 14.4416666666667},
{godina: 1983, temp_max: 14.6666666666667},
{godina: 1984, temp_max: 13.6083333333333},
{godina: 1985, temp_max: 13},
{godina: 1986, temp_max: 13.9083333333333},
{godina: 1987, temp_max: 14.0833333333333},
{godina: 1988, temp_max: 15.3833333333333},
{godina: 1989, temp_max: 15.6583333333333},
{godina: 1990, temp_max: 13.95},
{godina: 1991, temp_max: 14.5333333333333},
{godina: 1992, temp_max: 13.9083333333333},
{godina: 1993, temp_max: 13.9666666666667},
{godina: 1994, temp_max: 15.5833333333333},
{godina: 1995, temp_max: 14.0666666666667},
{godina: 1996, temp_max: 14.725},
{godina: 1997, temp_max: 14.9416666666667},
{godina: 1998, temp_max: 14.9833333333333},
{godina: 1999, temp_max: 14.9666666666667},
{godina: 2000, temp_max: 14.7166666666667}]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1976,2002]).range([0, width]);
var y = d3.scale.linear().domain([12, 17]).range([height, 0]);

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
    return y(d.temp_max); 
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
    .attr("cy", function(d) { return y(d.temp_max); })		
    .on("mouseover", function(d) {		
        div.transition()		
            .duration(200)		
            .style("opacity", .9);		
        div	.html("year:"+(d.godina) +  "<br/>"  + d.temp_max +" "+"&#8451")	
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