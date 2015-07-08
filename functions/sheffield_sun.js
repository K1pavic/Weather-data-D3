function sf_graph_sun() {

document.getElementById("btn_sf")
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

var data = [{godina: 1929, sun: 106.341666666667},
{godina: 1930, sun: 101.258333333333},
{godina: 1931, sun: 94.8583333333333},
{godina: 1932, sun: 88.35},
{godina: 1933, sun: 114.033333333333},
{godina: 1934, sun: 108.041666666667},
{godina: 1935, sun: 118.183333333333},
{godina: 1936, sun: 92.325},
{godina: 1937, sun: 92.025},
{godina: 1938, sun: 101.133333333333},
{godina: 1939, sun: 94.6166666666667},
{godina: 1940, sun: 112.475},
{godina: 1941, sun: 95.175},
{godina: 1942, sun: 99.5083333333333},
{godina: 1943, sun: 118.925},
{godina: 1944, sun: 90.725},
{godina: 1945, sun: 103.658333333333},
{godina: 1946, sun: 99.375},
{godina: 1947, sun: 105.833333333333},
{godina: 1948, sun: 106.375},
{godina: 1949, sun: 123.975},
{godina: 1950, sun: 109.258333333333},
{godina: 1951, sun: 104.808333333333},
{godina: 1952, sun: 103.9},
{godina: 1953, sun: 100.558333333333},
{godina: 1954, sun: 87.3166666666667},
{godina: 1955, sun: 112.375},
{godina: 1956, sun: 94.575},
{godina: 1957, sun: 99.5333333333333},
{godina: 1958, sun: 90.6833333333333},
{godina: 1959, sun: 123.208333333333},
{godina: 1960, sun: 102.1},
{godina: 1961, sun: 115.791666666667},
{godina: 1962, sun: 103.591666666667},
{godina: 1963, sun: 94.15},
{godina: 1964, sun: 107.516666666667},
{godina: 1965, sun: 93.5333333333333},
{godina: 1966, sun: 90.9166666666666},
{godina: 1967, sun: 110.2},
{godina: 1968, sun: 82.3083333333333},
{godina: 1969, sun: 103.425},
{godina: 1970, sun: 115.4},
{godina: 1971, sun: 111.175},
{godina: 1972, sun: 92.2166666666667},
{godina: 1973, sun: 111.883333333333},
{godina: 1974, sun: 113.575},
{godina: 1975, sun: 123.133333333333},
{godina: 1976, sun: 122.416666666667},
{godina: 1977, sun: 114.258333333333},
{godina: 1978, sun: 105.158333333333},
{godina: 1979, sun: 111.475},
{godina: 1980, sun: 105.283333333333},
{godina: 1981, sun: 106.666666666667},
{godina: 1982, sun: 112.508333333333},
{godina: 1983, sun: 101.175},
{godina: 1984, sun: 115.325},
{godina: 1985, sun: 101.95},
{godina: 1986, sun: 111.975},
{godina: 1987, sun: 107.116666666667},
{godina: 1988, sun: 112.191666666667},
{godina: 1989, sun: 143.741666666667},
{godina: 1990, sun: 128.55},
{godina: 1991, sun: 111.833333333333},
{godina: 1992, sun: 111.983333333333},
{godina: 1993, sun: 106.991666666667},
{godina: 1994, sun: 113.716666666667},
{godina: 1995, sun: 132.191666666667},
{godina: 1996, sun: 120.1},
{godina: 1997, sun: 131.95},
{godina: 1998, sun: 116.391666666667},
{godina: 1999, sun: 135.475},
{godina: 2000, sun: 117.091666666667},
{godina: 2001, sun: 118.541666666667},
{godina: 2002, sun: 116.416666666667},
{godina: 2003, sun: 138.483333333333},
{godina: 2004, sun: 125.45},
{godina: 2005, sun: 129.3},
{godina: 2006, sun: 133.816666666667},
{godina: 2007, sun: 132.383333333333},
{godina: 2008, sun: 126.041666666667},
{godina: 2009, sun: 132.983333333333}]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1927,2012]).range([0, width]);
var y = d3.scale.linear().domain([80, 150]).range([height, 0]);

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
        div .html("year:"+(d.godina) +  "<br/>"  + d.sun +" "+"days")   
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