function cd_graph_rain() {

document.getElementById("btn_cd")
.style.color = "#000000";

document.getElementById("btn_min")
.style.color = "#ffffff";	
document.getElementById("btn_max")
.style.color = "#ffffff";	
document.getElementById("btn_sun")
.style.color = "#ffffff";	

document.getElementById("btn_rain")
.style.color = "#000000";	
   
d3.select("#graph").select("svg").remove();

var data = [{godina: 1977, rain: 85.3666666666667},
{godina: 1978, rain: 85.8},
{godina: 1979, rain: 94.0583333333333},
{godina: 1980, rain: 90.1166666666667},
{godina: 1981, rain: 94.5166666666667},
{godina: 1982, rain: 99.0583333333333},
{godina: 1983, rain: 78.1},
{godina: 1984, rain: 118.525},
{godina: 1985, rain: 87.7166666666667},
{godina: 1986, rain: 88.6916666666667},
{godina: 1987, rain: 111.083333333333},
{godina: 1988, rain: 76.1333333333333},
{godina: 1989, rain: 88.55},
{godina: 1990, rain: 85.9583333333334},
{godina: 1991, rain: 78.925},
{godina: 1992, rain: 90.1},
{godina: 1993, rain: 109.8},
{godina: 1994, rain: 97.25},
{godina: 1995, rain: 88.5333333333333},
{godina: 1996, rain: 98.2916666666667},
{godina: 1997, rain: 106.016666666667},
{godina: 1998, rain: 117.616666666667},
{godina: 1999, rain: 105.825},
{godina: 2000, rain: 132.075},
{godina: 2001, rain: 94.9666666666667},
{godina: 2002, rain: 91.1416666666667},
{godina: 2003, rain: 87.575}]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1976,2005]).range([0, width]);
var y = d3.scale.linear().domain([60, 140]).range([height, 0]);

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
    return y(d.rain); 
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
    
    .style('stroke','steelblue')
    .style('stroke-width', '3px')
    
    .attr("d", valueline(data));

// Add the scatterplot
svg.selectAll("dot")	
    .data(data)			
.enter().append("circle")								
    .attr("r", 3)
    .attr("fill",'steelblue')
    .attr("stroke",'steelblue')		
    .attr("cx", function(d) { return x(d.godina); })		 
    .attr("cy", function(d) { return y(d.rain); })		
    .on("mouseover", function(d) {		
        div.transition()		
            .duration(200)		
            .style("opacity", .9);		
        div	.html("year:"+(d.godina) +  "<br/>"  + d.rain +" "+"mm")	
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