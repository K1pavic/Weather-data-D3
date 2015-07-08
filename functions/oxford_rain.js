function of_graph_rain() {

document.getElementById("btn_of")
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

var data = [{godina: 1853, rain: 57.6666666666667},
{godina: 1854, rain: 37.475},
{godina: 1855, rain: 53.3583333333333},
{godina: 1856, rain: 57.1833333333333},
{godina: 1857, rain: 61.2833333333333},
{godina: 1858, rain: 46.1333333333333},
{godina: 1859, rain: 58.7166666666667},
{godina: 1860, rain: 65.7833333333333},
{godina: 1861, rain: 49.75},
{godina: 1862, rain: 58.1083333333333},
{godina: 1863, rain: 47.5416666666667},
{godina: 1864, rain: 38.4833333333333},
{godina: 1865, rain: 61.0083333333333},
{godina: 1866, rain: 65.0166666666667},
{godina: 1867, rain: 57.6916666666667},
{godina: 1868, rain: 56.1666666666667},
{godina: 1869, rain: 56.3416666666667},
{godina: 1870, rain: 37.4916666666667},
{godina: 1871, rain: 45.1083333333333},
{godina: 1872, rain: 63.525},
{godina: 1873, rain: 49.5083333333333},
{godina: 1874, rain: 45.2833333333333},
{godina: 1875, rain: 70.3583333333333},
{godina: 1876, rain: 69.05},
{godina: 1877, rain: 64.1583333333333},
{godina: 1878, rain: 56.425},
{godina: 1879, rain: 63.1333333333333},
{godina: 1880, rain: 64.8416666666667},
{godina: 1881, rain: 54.775},
{godina: 1882, rain: 67.1916666666666},
{godina: 1883, rain: 57.1833333333333},
{godina: 1884, rain: 40.075},
{godina: 1885, rain: 55.15},
{godina: 1886, rain: 69.1916666666667},
{godina: 1887, rain: 41.0583333333333},
{godina: 1888, rain: 59.6916666666667},
{godina: 1889, rain: 52.375},
{godina: 1890, rain: 38.95},
{godina: 1891, rain: 60.0833333333333},
{godina: 1892, rain: 43.95},
{godina: 1893, rain: 39.3666666666667},
{godina: 1894, rain: 63.8166666666667},
{godina: 1895, rain: 50.5416666666667},
{godina: 1896, rain: 52.875},
{godina: 1897, rain: 57.5666666666667},
{godina: 1898, rain: 42.25},
{godina: 1899, rain: 46.6333333333333},
{godina: 1900, rain: 50.0333333333333},
{godina: 1901, rain: 47.1833333333333},
{godina: 1902, rain: 35.2833333333333},
{godina: 1903, rain: 76.15},
{godina: 1904, rain: 47.8083333333333},
{godina: 1905, rain: 44.3583333333333},
{godina: 1906, rain: 51.2833333333333},
{godina: 1907, rain: 57.3},
{godina: 1908, rain: 50.275},
{godina: 1909, rain: 58.7083333333333},
{godina: 1910, rain: 61.775},
{godina: 1911, rain: 44.8333333333333},
{godina: 1912, rain: 69.4833333333333},
{godina: 1913, rain: 53.875},
{godina: 1914, rain: 62.1333333333333},
{godina: 1915, rain: 68.4083333333333},
{godina: 1916, rain: 67.8333333333333},
{godina: 1917, rain: 52.4166666666667},
{godina: 1918, rain: 57.4666666666667},
{godina: 1919, rain: 55.475},
{godina: 1920, rain: 54.1833333333333},
{godina: 1921, rain: 31.6083333333333},
{godina: 1922, rain: 55.8833333333333},
{godina: 1923, rain: 55.5583333333333},
{godina: 1924, rain: 71.2416666666667},
{godina: 1925, rain: 56.3666666666667},
{godina: 1926, rain: 57.95},
{godina: 1927, rain: 73.775},
{godina: 1928, rain: 47.6166666666667},
{godina: 1929, rain: 47.5333333333333},
{godina: 1930, rain: 57.075},
{godina: 1931, rain: 57.775},
{godina: 1932, rain: 56.1916666666667},
{godina: 1933, rain: 40.95},
{godina: 1934, rain: 46.5333333333333},
{godina: 1935, rain: 64.2416666666667},
{godina: 1936, rain: 54.525},
{godina: 1937, rain: 58.4083333333333},
{godina: 1938, rain: 48.1166666666667},
{godina: 1939, rain: 64.4666666666667},
{godina: 1940, rain: 54.5916666666667},
{godina: 1941, rain: 54.1083333333333},
{godina: 1942, rain: 55.6833333333333},
{godina: 1943, rain: 42.9083333333333},
{godina: 1944, rain: 46.6333333333333},
{godina: 1945, rain: 47.475},
{godina: 1946, rain: 57.075},
{godina: 1947, rain: 42.3333333333333},
{godina: 1948, rain: 60.7583333333333},
{godina: 1949, rain: 48.2083333333333},
{godina: 1950, rain: 61.1666666666667},
{godina: 1951, rain: 71.4666666666667},
{godina: 1952, rain: 54.925},
{godina: 1953, rain: 44.4083333333333},
{godina: 1954, rain: 61.125},
{godina: 1955, rain: 48.7333333333333},
{godina: 1956, rain: 52.5583333333333},
{godina: 1957, rain: 59.5083333333333},
{godina: 1958, rain: 66.6833333333333},
{godina: 1959, rain: 51.5333333333333},
{godina: 1960, rain: 80.3916666666667},
{godina: 1961, rain: 54.5416666666667},
{godina: 1962, rain: 52.75},
{godina: 1963, rain: 53.325},
{godina: 1964, rain: 34.875},
{godina: 1965, rain: 54.8666666666667},
{godina: 1966, rain: 62.6},
{godina: 1967, rain: 58.3333333333333},
{godina: 1968, rain: 67.7583333333333},
{godina: 1969, rain: 50.7666666666667},
{godina: 1970, rain: 53.4666666666667},
{godina: 1971, rain: 61.7166666666667},
{godina: 1972, rain: 47.975},
{godina: 1973, rain: 41.2166666666667},
{godina: 1974, rain: 65.3166666666667},
{godina: 1975, rain: 44.8666666666667},
{godina: 1976, rain: 42.4333333333333},
{godina: 1977, rain: 59.2166666666667},
{godina: 1978, rain: 48.0666666666667},
{godina: 1979, rain: 62.6583333333333},
{godina: 1980, rain: 52.8583333333333},
{godina: 1981, rain: 56.9083333333333},
{godina: 1982, rain: 54.5416666666667},
{godina: 1983, rain: 48.1416666666667},
{godina: 1984, rain: 50.725},
{godina: 1985, rain: 55.1666666666667},
{godina: 1986, rain: 58.675}]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1850,1990]).range([0, width]);
var y = d3.scale.linear().domain([20, 80]).range([height, 0]);

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