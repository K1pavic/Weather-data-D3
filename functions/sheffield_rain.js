function sf_graph_rain() {

document.getElementById("btn_sf")
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

var data = [{godina: 1883, rain: 72.9583333333333},
{godina: 1884, rain: 54.0166666666667},
{godina: 1885, rain: 65.675},
{godina: 1886, rain: 78.3583333333333},
{godina: 1887, rain: 40.925},
{godina: 1888, rain: 61.9583333333333},
{godina: 1889, rain: 60.8416666666667},
{godina: 1890, rain: 57.2083333333333},
{godina: 1891, rain: 73.2333333333333},
{godina: 1892, rain: 72.1333333333333},
{godina: 1893, rain: 54.575},
{godina: 1894, rain: 69.2916666666667},
{godina: 1895, rain: 66.5083333333333},
{godina: 1896, rain: 56.8166666666667},
{godina: 1897, rain: 61.9833333333333},
{godina: 1898, rain: 57.425},
{godina: 1899, rain: 62.675},
{godina: 1900, rain: 69.7666666666667},
{godina: 1901, rain: 59.2166666666667},
{godina: 1902, rain: 62.4333333333333},
{godina: 1903, rain: 80.5916666666667},
{godina: 1904, rain: 58.4333333333333},
{godina: 1905, rain: 51.5833333333333},
{godina: 1906, rain: 62.3},
{godina: 1907, rain: 66.95},
{godina: 1908, rain: 53.8},
{godina: 1909, rain: 67.0083333333333},
{godina: 1910, rain: 65.6166666666667},
{godina: 1911, rain: 53.9},
{godina: 1912, rain: 83.0916666666667},
{godina: 1913, rain: 64.5},
{godina: 1914, rain: 61.2083333333333},
{godina: 1915, rain: 69.5833333333333},
{godina: 1916, rain: 70.0583333333334},
{godina: 1917, rain: 54.9666666666667},
{godina: 1918, rain: 69.025},
{godina: 1919, rain: 75.8083333333333},
{godina: 1920, rain: 71.4083333333333},
{godina: 1921, rain: 48.1916666666667},
{godina: 1922, rain: 75.35},
{godina: 1923, rain: 73.6583333333333},
{godina: 1924, rain: 61.675},
{godina: 1925, rain: 64.4916666666667},
{godina: 1926, rain: 61.7833333333333},
{godina: 1927, rain: 72.2333333333333},
{godina: 1928, rain: 72.5916666666667},
{godina: 1929, rain: 59.375},
{godina: 1930, rain: 76.6},
{godina: 1931, rain: 77.325},
{godina: 1932, rain: 67.45},
{godina: 1933, rain: 52.8166666666667},
{godina: 1934, rain: 52.2333333333333},
{godina: 1935, rain: 72.6083333333333},
{godina: 1936, rain: 64.525},
{godina: 1937, rain: 74.9},
{godina: 1938, rain: 65.8},
{godina: 1939, rain: 78.025},
{godina: 1940, rain: 63.7833333333333},
{godina: 1941, rain: 73.5083333333333},
{godina: 1942, rain: 56.7583333333333},
{godina: 1943, rain: 55.1083333333333},
{godina: 1944, rain: 70.6583333333333},
{godina: 1945, rain: 56.9916666666667},
{godina: 1946, rain: 82.1416666666667},
{godina: 1947, rain: 64.2583333333333},
{godina: 1948, rain: 61.3833333333333},
{godina: 1949, rain: 59.4333333333333},
{godina: 1950, rain: 64.5416666666667},
{godina: 1951, rain: 78.1416666666667},
{godina: 1952, rain: 57.875},
{godina: 1953, rain: 49.85},
{godina: 1954, rain: 81.9833333333333},
{godina: 1955, rain: 58.35},
{godina: 1956, rain: 75.1083333333333},
{godina: 1957, rain: 61.125},
{godina: 1958, rain: 80.3666666666667},
{godina: 1959, rain: 50.775},
{godina: 1960, rain: 86.2666666666667},
{godina: 1961, rain: 59.8333333333333},
{godina: 1962, rain: 57.3833333333333},
{godina: 1963, rain: 61.4},
{godina: 1964, rain: 53.6083333333333},
{godina: 1965, rain: 86.5416666666667},
{godina: 1966, rain: 80.75},
{godina: 1967, rain: 66.8916666666667},
{godina: 1968, rain: 73.05},
{godina: 1969, rain: 78.725},
{godina: 1970, rain: 65.55},
{godina: 1971, rain: 64.2},
{godina: 1972, rain: 67.3833333333333},
{godina: 1973, rain: 63.4416666666667},
{godina: 1974, rain: 64.5166666666667},
{godina: 1975, rain: 46.6083333333333},
{godina: 1976, rain: 56.1833333333333},
{godina: 1977, rain: 73.6333333333333},
{godina: 1978, rain: 68.6583333333333},
{godina: 1979, rain: 80.0333333333333},
{godina: 1980, rain: 73.15},
{godina: 1981, rain: 78.3833333333333},
{godina: 1982, rain: 69.3166666666667},
{godina: 1983, rain: 75.5166666666667},
{godina: 1984, rain: 72.2083333333333},
{godina: 1985, rain: 56.175},
{godina: 1986, rain: 83.175},
{godina: 1987, rain: 65.775},
{godina: 1988, rain: 76.25},
{godina: 1989, rain: 61.425},
{godina: 1990, rain: 63.5833333333333},
{godina: 1991, rain: 55.5583333333333},
{godina: 1992, rain: 68.70833333333}]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1881,1995]).range([0, width]);
var y = d3.scale.linear().domain([30, 90]).range([height, 0]);

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
        div .html("year:"+(d.godina) +  "<br/>"  + d.rain +" "+"mm")    
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