function of_graph_sun() {

document.getElementById("btn_of")
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

var data = [{godina: 1929, sun: 145.033333333333},
{godina: 1930, sun: 113.075},
{godina: 1931, sun: 103.283333333333},
{godina: 1932, sun: 106.975},
{godina: 1933, sun: 147.733333333333},
{godina: 1934, sun: 131.975},
{godina: 1935, sun: 131.625},
{godina: 1936, sun: 106.7},
{godina: 1937, sun: 113.183333333333},
{godina: 1938, sun: 119.416666666667},
{godina: 1939, sun: 120.316666666667},
{godina: 1940, sun: 133.666666666667},
{godina: 1941, sun: 118.041666666667},
{godina: 1942, sun: 117.916666666667},
{godina: 1943, sun: 132.891666666667},
{godina: 1944, sun: 120.091666666667},
{godina: 1945, sun: 114.616666666667},
{godina: 1946, sun: 114.966666666667},
{godina: 1947, sun: 120.025},
{godina: 1948, sun: 128.983333333333},
{godina: 1949, sun: 152.25},
{godina: 1950, sun: 124.65},
{godina: 1951, sun: 129.766666666667},
{godina: 1952, sun: 139.016666666667},
{godina: 1953, sun: 130.375},
{godina: 1954, sun: 118.933333333333},
{godina: 1955, sun: 140.183333333333},
{godina: 1956, sun: 122.125},
{godina: 1957, sun: 131.45},
{godina: 1958, sun: 109.025},
{godina: 1959, sun: 154.45},
{godina: 1960, sun: 117.383333333333},
{godina: 1961, sun: 133.441666666667},
{godina: 1962, sun: 126.35},
{godina: 1963, sun: 114.375},
{godina: 1964, sun: 126.6},
{godina: 1965, sun: 120.708333333333},
{godina: 1966, sun: 118.358333333333},
{godina: 1967, sun: 135.575},
{godina: 1968, sun: 110.333333333333},
{godina: 1969, sun: 131.633333333333},
{godina: 1970, sun: 137.466666666667},
{godina: 1971, sun: 128.325},
{godina: 1972, sun: 108.458333333333},
{godina: 1973, sun: 134.408333333333},
{godina: 1974, sun: 125.508333333333},
{godina: 1975, sun: 134.575},
{godina: 1976, sun: 132.408333333333},
{godina: 1977, sun: 114.108333333333},
{godina: 1978, sun: 115.908333333333},
{godina: 1979, sun: 124.45},
{godina: 1980, sun: 126.85},
{godina: 1981, sun: 100.391666666667},
{godina: 1982, sun: 115.075},
{godina: 1983, sun: 122.275},
{godina: 1984, sun: 131.183333333333},
{godina: 1985, sun: 123.2},
{godina: 1986, sun: 135.416666666667},
{godina: 1987, sun: 114.258333333333},
{godina: 1988, sun: 116.8},
{godina: 1989, sun: 155.675}]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1927,1992]).range([0, width]);
var y = d3.scale.linear().domain([90, 160]).range([height, 0]);

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