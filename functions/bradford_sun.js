function bf_graph_sun() {

document.getElementById("btn_bf")
.style.color = "#000000";

document.getElementById("btn_max")
.style.color = "#ffffff";	
document.getElementById("btn_rain")
.style.color = "#ffffff";	
document.getElementById("btn_min")
.style.color = "#ffffff";	

document.getElementById("btn_sun")
.style.color = "#000000";	
   
d3.select("#graph").select("svg").remove();

var data = [{godina: 1907, sun: 107.208333333333},
{godina: 1908, sun: 106.358333333333},
{godina: 1909, sun: 106.458333333333},
{godina: 1910, sun: 125.891666666667},
{godina: 1911, sun: 83.4166666666667},
{godina: 1912, sun: 88.8333333333333},
{godina: 1913, sun: 107.608333333333},
{godina: 1914, sun: 104.275},
{godina: 1915, sun: 91.8},
{godina: 1916, sun: 102.241666666667},
{godina: 1917, sun: 102.633333333333},
{godina: 1918, sun: 106.316666666667},
{godina: 1919, sun: 84.3666666666667},
{godina: 1920, sun: 112.958333333333},
{godina: 1921, sun: 93.625},
{godina: 1922, sun: 101.758333333333},
{godina: 1923, sun: 89.0916666666667},
{godina: 1924, sun: 100.366666666667},
{godina: 1925, sun: 98.2666666666667},
{godina: 1926, sun: 89.1166666666667},
{godina: 1927, sun: 102.666666666667},
{godina: 1928, sun: 108.708333333333},
{godina: 1929, sun: 99.175},
{godina: 1930, sun: 91.8333333333333},
{godina: 1931, sun: 88.0583333333333},
{godina: 1932, sun: 111.933333333333},
{godina: 1933, sun: 106.95},
{godina: 1934, sun: 117.591666666667},
{godina: 1935, sun: 96.8},
{godina: 1936, sun: 85.0416666666667},
{godina: 1937, sun: 99.7083333333333},
{godina: 1938, sun: 98.8916666666667},
{godina: 1939, sun: 103.433333333333},
{godina: 1940, sun: 90.375},
{godina: 1941, sun: 99.35},
{godina: 1942, sun: 109.45},
{godina: 1943, sun: 90.4416666666667},
{godina: 1944, sun: 100.408333333333},
{godina: 1945, sun: 105},
{godina: 1946, sun: 106.566666666667},
{godina: 1947, sun: 105.908333333333},
{godina: 1948, sun: 127.283333333333},
{godina: 1949, sun: 109.566666666667},
{godina: 1950, sun: 105.966666666667},
{godina: 1951, sun: 109.866666666667},
{godina: 1952, sun: 104.175},
{godina: 1953, sun: 88.9333333333333},
{godina: 1954, sun: 122.608333333333},
{godina: 1955, sun: 103.366666666667},
{godina: 1956, sun: 110.95},
{godina: 1957, sun: 92.0916666666667},
{godina: 1958, sun: 115.183333333333},
{godina: 1959, sun: 105.933333333333},
{godina: 1960, sun: 101.508333333333},
{godina: 1961, sun: 102.7},
{godina: 1962, sun: 97.2},
{godina: 1963, sun: 101.933333333333},
{godina: 1964, sun: 94.1583333333333},
{godina: 1965, sun: 93.5916666666666},
{godina: 1966, sun: 107.216666666667},
{godina: 1967, sun: 89.2583333333333},
{godina: 1968, sun: 102.4},
{godina: 1969, sun: 113.758333333333},
{godina: 1970, sun: 104.008333333333},
{godina: 1971, sun: 94.025},
{godina: 1972, sun: 106.716666666667},
{godina: 1973, sun: 102.216666666667},
{godina: 1974, sun: 120.316666666667},
{godina: 1975, sun: 110.941666666667},
{godina: 1976, sun: 106.941666666667},
{godina: 1977, sun: 84.9416666666667},
{godina: 1978, sun: 100.441666666667},
{godina: 1979, sun: 97.85},
{godina: 1980, sun: 100.45},
{godina: 1981, sun: 100.925},
{godina: 1982, sun: 87.7416666666667},
{godina: 1983, sun: 105.541666666667},
{godina: 1984, sun: 93.2666666666667},
{godina: 1985, sun: 103.716666666667},
{godina: 1986, sun: 89.125},
{godina: 1987, sun: 105.275},
{godina: 1988, sun: 118.666666666667}]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1905,1990]).range([0, width]);
var y = d3.scale.linear().domain([80, 130]).range([height, 0]);

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