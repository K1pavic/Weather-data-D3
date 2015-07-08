function sf_graph_min() {

document.getElementById("btn_sf")
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

var data = [{godina: 1883, temp_min: 5.49166666666667},
{godina: 1884, temp_min: 6},
{godina: 1885, temp_min: 4.825},
{godina: 1886, temp_min: 4.99166666666667},
{godina: 1887, temp_min: 4.94166666666667},
{godina: 1888, temp_min: 4.9},
{godina: 1889, temp_min: 5.69166666666667},
{godina: 1890, temp_min: 5.51666666666667},
{godina: 1891, temp_min: 5.09166666666667},
{godina: 1892, temp_min: 4.59166666666667},
{godina: 1893, temp_min: 5.825},
{godina: 1894, temp_min: 5.66666666666667},
{godina: 1895, temp_min: 5.03333333333333},
{godina: 1896, temp_min: 5.95833333333333},
{godina: 1897, temp_min: 5.75833333333333},
{godina: 1898, temp_min: 6.51666666666667},
{godina: 1899, temp_min: 6.025},
{godina: 1900, temp_min: 6.13333333333333},
{godina: 1901, temp_min: 5.575},
{godina: 1902, temp_min: 5.54166666666667},
{godina: 1903, temp_min: 5.925},
{godina: 1904, temp_min: 5.75833333333333},
{godina: 1905, temp_min: 5.99166666666667},
{godina: 1906, temp_min: 5.98333333333333},
{godina: 1907, temp_min: 5.59166666666667},
{godina: 1908, temp_min: 5.91666666666667},
{godina: 1909, temp_min: 5.325},
{godina: 1910, temp_min: 5.91666666666667},
{godina: 1911, temp_min: 6.48333333333333},
{godina: 1912, temp_min: 6.10833333333333},
{godina: 1913, temp_min: 6.425},
{godina: 1914, temp_min: 6.6},
{godina: 1915, temp_min: 5.65},
{godina: 1916, temp_min: 6.025},
{godina: 1917, temp_min: 5.4},
{godina: 1918, temp_min: 5.5},
{godina: 1919, temp_min: 6},
{godina: 1920, temp_min: 6.35},
{godina: 1921, temp_min: 6.88333333333333},
{godina: 1922, temp_min: 5.35},
{godina: 1923, temp_min: 6},
{godina: 1924, temp_min: 6.14166666666667},
{godina: 1925, temp_min: 5.91666666666667},
{godina: 1926, temp_min: 6.39166666666667},
{godina: 1927, temp_min: 6},
{godina: 1928, temp_min: 6.10833333333333},
{godina: 1929, temp_min: 5.54166666666667},
{godina: 1930, temp_min: 6.14166666666667},
{godina: 1931, temp_min: 5.88333333333333},
{godina: 1932, temp_min: 6.34166666666667},
{godina: 1933, temp_min: 6.70833333333333},
{godina: 1934, temp_min: 6.70833333333333},
{godina: 1935, temp_min: 6.31666666666667},
{godina: 1936, temp_min: 6.08333333333333},
{godina: 1937, temp_min: 6.275},
{godina: 1938, temp_min: 6.91666666666667},
{godina: 1939, temp_min: 6.5},
{godina: 1940, temp_min: 5.675},
{godina: 1941, temp_min: 5.90833333333333},
{godina: 1942, temp_min: 5.875},
{godina: 1943, temp_min: 6.8},
{godina: 1944, temp_min: 6.35833333333333},
{godina: 1945, temp_min: 7.24166666666667},
{godina: 1946, temp_min: 6.425},
{godina: 1947, temp_min: 6.35},
{godina: 1948, temp_min: 6.59166666666667},
{godina: 1949, temp_min: 6.93333333333333},
{godina: 1950, temp_min: 6.10833333333333},
{godina: 1951, temp_min: 5.95},
{godina: 1952, temp_min: 6.06666666666667},
{godina: 1953, temp_min: 6.84166666666667},
{godina: 1954, temp_min: 6.09166666666667},
{godina: 1955, temp_min: 6.025},
{godina: 1956, temp_min: 5.84166666666667},
{godina: 1957, temp_min: 6.76666666666667},
{godina: 1958, temp_min: 6.275},
{godina: 1959, temp_min: 7.05833333333333},
{godina: 1960, temp_min: 6.6},
{godina: 1961, temp_min: 6.66666666666667},
{godina: 1962, temp_min: 5.28333333333333},
{godina: 1963, temp_min: 5.075},
{godina: 1964, temp_min: 5.96666666666667},
{godina: 1965, temp_min: 5.71666666666667},
{godina: 1966, temp_min: 6.175},
{godina: 1967, temp_min: 6.375},
{godina: 1968, temp_min: 6.15833333333333},
{godina: 1969, temp_min: 5.91666666666667},
{godina: 1970, temp_min: 6.33333333333333},
{godina: 1971, temp_min: 6.59166666666667},
{godina: 1972, temp_min: 6.05833333333333},
{godina: 1973, temp_min: 6.40833333333333},
{godina: 1974, temp_min: 6.21666666666667},
{godina: 1975, temp_min: 6.45833333333333},
{godina: 1976, temp_min: 6.39166666666667},
{godina: 1977, temp_min: 6},
{godina: 1978, temp_min: 6.1},
{godina: 1979, temp_min: 5.61666666666667},
{godina: 1980, temp_min: 6.19166666666667},
{godina: 1981, temp_min: 6.01666666666667},
{godina: 1982, temp_min: 6.39166666666667},
{godina: 1983, temp_min: 6.66666666666667},
{godina: 1984, temp_min: 6.19166666666667},
{godina: 1985, temp_min: 5.825},
{godina: 1986, temp_min: 5.28333333333333},
{godina: 1987, temp_min: 5.80833333333333},
{godina: 1988, temp_min: 6.54166666666667},
{godina: 1989, temp_min: 6.88333333333333},
{godina: 1990, temp_min: 7.25},
{godina: 1991, temp_min: 6.3},
{godina: 1992, temp_min: 6.4},
{godina: 1993, temp_min: 5.93333333333333},
{godina: 1994, temp_min: 6.475},
{godina: 1995, temp_min: 6.76666666666667},
{godina: 1996, temp_min: 5.76666666666667},
{godina: 1997, temp_min: 7.04166666666667},
{godina: 1998, temp_min: 7.00833333333333},
{godina: 1999, temp_min: 7.18333333333333},
{godina: 2000, temp_min: 6.85},
{godina: 2001, temp_min: 6.36666666666667},
{godina: 2002, temp_min: 7.18333333333333},
{godina: 2003, temp_min: 6.73333333333333},
{godina: 2004, temp_min: 7.45833333333333},
{godina: 2005, temp_min: 7.18333333333333},
{godina: 2006, temp_min: 7.36666666666667}]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1881,2008]).range([0, width]);
var y = d3.scale.linear().domain([3, 8]).range([height, 0]);

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
        div .html("year:"+(d.godina) +  "<br/>"  + d.temp_max +" "+"&#8451")    
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