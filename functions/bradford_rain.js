function bf_graph_rain() {

document.getElementById("btn_bf")
.style.color = "#000000";

document.getElementById("btn_max")
.style.color = "#ffffff";	
document.getElementById("btn_min")
.style.color = "#ffffff";	
document.getElementById("btn_sun")
.style.color = "#ffffff";	

document.getElementById("btn_rain")
.style.color = "#000000";	
   
d3.select("#graph").select("svg").remove();

var data = [{godina: 1910, rain: 59.4},
{godina: 1911, rain: 91.6666666666667},
{godina: 1912, rain: 64.1333333333333},
{godina: 1913, rain: 77.2166666666667},
{godina: 1914, rain: 77.7833333333333},
{godina: 1915, rain: 80.7083333333333},
{godina: 1916, rain: 62.5583333333333},
{godina: 1917, rain: 80.2083333333333},
{godina: 1918, rain: 75.85},
{godina: 1919, rain: 83.4333333333333},
{godina: 1920, rain: 56.4},
{godina: 1921, rain: 75.0333333333333},
{godina: 1922, rain: 80.475},
{godina: 1923, rain: 70.3416666666667},
{godina: 1924, rain: 78.0166666666667},
{godina: 1925, rain: 69.075},
{godina: 1926, rain: 81.8166666666667},
{godina: 1927, rain: 91.6833333333333},
{godina: 1928, rain: 61},
{godina: 1929, rain: 91.025},
{godina: 1930, rain: 77.9666666666667},
{godina: 1931, rain: 62.6666666666667},
{godina: 1932, rain: 52.675},
{godina: 1933, rain: 58.575},
{godina: 1934, rain: 84.7},
{godina: 1935, rain: 73.075},
{godina: 1936, rain: 64.3333333333333},
{godina: 1937, rain: 80.1666666666667},
{godina: 1938, rain: 72.4583333333333},
{godina: 1939, rain: 60.7833333333333},
{godina: 1940, rain: 66.2333333333333},
{godina: 1941, rain: 60.6083333333333},
{godina: 1942, rain: 58.7666666666667},
{godina: 1943, rain: 82.8416666666667},
{godina: 1944, rain: 67.5916666666667},
{godina: 1945, rain: 78.25},
{godina: 1946, rain: 73.8666666666667},
{godina: 1947, rain: 63.6},
{godina: 1948, rain: 65.9083333333333},
{godina: 1949, rain: 72.5583333333333},
{godina: 1950, rain: 88.125},
{godina: 1951, rain: 60.575},
{godina: 1952, rain: 57.6583333333333},
{godina: 1953, rain: 87.3},
{godina: 1954, rain: 51.8},
{godina: 1955, rain: 74.225},
{godina: 1956, rain: 68.5833333333333},
{godina: 1957, rain: 82.7666666666667},
{godina: 1958, rain: 61.9583333333333},
{godina: 1959, rain: 87.3666666666667},
{godina: 1960, rain: 77.025},
{godina: 1961, rain: 61.7333333333333},
{godina: 1962, rain: 66.8833333333333},
{godina: 1963, rain: 58.1166666666667},
{godina: 1964, rain: 84.9333333333333},
{godina: 1965, rain: 92.6666666666667},
{godina: 1966, rain: 81.3083333333333},
{godina: 1967, rain: 87.35},
{godina: 1968, rain: 77.525},
{godina: 1969, rain: 71.3083333333333},
{godina: 1970, rain: 57.8583333333333},
{godina: 1971, rain: 70.7666666666667},
{godina: 1972, rain: 61.2583333333333},
{godina: 1973, rain: 76.15},
{godina: 1974, rain: 53.8083333333333},
{godina: 1975, rain: 70.125},
{godina: 1976, rain: 73.9},
{godina: 1977, rain: 72.4833333333333},
{godina: 1978, rain: 81.5666666666667},
{godina: 1979, rain: 83.0416666666667},
{godina: 1980, rain: 76.65},
{godina: 1981, rain: 72.5666666666667},
{godina: 1982, rain: 84.125},
{godina: 1983, rain: 73.7333333333333},
{godina: 1984, rain: 60.1416666666667},
{godina: 1985, rain: 82.45},
{godina: 1986, rain: 66.0333333333333},
{godina: 1987, rain: 77.075},
{godina: 1988, rain: 58.9416666666667},
{godina: 1989, rain: 72.2083333333333} ]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1908,1992]).range([0, width]);
var y = d3.scale.linear().domain([40, 100]).range([height, 0]);

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