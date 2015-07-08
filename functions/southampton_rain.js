function sh_graph_rain() {

document.getElementById("btn_sh")
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

var data = [{godina: 1855, rain: 61.5},
{godina: 1856, rain: 62.7333333333333},
{godina: 1857, rain: 61.025},
{godina: 1858, rain: 57.5083333333333},
{godina: 1859, rain: 82.8916666666667},
{godina: 1860, rain: 93.2583333333333},
{godina: 1861, rain: 63.2083333333333},
{godina: 1862, rain: 72.4333333333334},
{godina: 1863, rain: 66.6833333333333},
{godina: 1864, rain: 53.4833333333333},
{godina: 1865, rain: 90.375},
{godina: 1866, rain: 80.5083333333333},
{godina: 1867, rain: 65.375},
{godina: 1868, rain: 75.375},
{godina: 1869, rain: 62.3083333333333},
{godina: 1870, rain: 49.5916666666667},
{godina: 1871, rain: 62.8416666666667},
{godina: 1872, rain: 88.8583333333333},
{godina: 1873, rain: 62.8583333333333},
{godina: 1874, rain: 65.95},
{godina: 1875, rain: 70.2416666666667},
{godina: 1876, rain: 76.375},
{godina: 1877, rain: 74.1416666666667},
{godina: 1878, rain: 68.725},
{godina: 1879, rain: 77.0916666666667},
{godina: 1880, rain: 69.5666666666667},
{godina: 1881, rain: 62.3166666666667},
{godina: 1882, rain: 72.05},
{godina: 1883, rain: 64.2666666666667},
{godina: 1884, rain: 52.55},
{godina: 1885, rain: 63.9333333333333},
{godina: 1886, rain: 78.2416666666667},
{godina: 1887, rain: 49.275},
{godina: 1888, rain: 67.4083333333333},
{godina: 1889, rain: 53.7916666666667},
{godina: 1890, rain: 51.6333333333333},
{godina: 1891, rain: 82.2},
{godina: 1892, rain: 50.7666666666667},
{godina: 1893, rain: 49.7833333333333},
{godina: 1894, rain: 73.9083333333333},
{godina: 1895, rain: 59.9916666666667},
{godina: 1896, rain: 55.7333333333333},
{godina: 1897, rain: 68.95},
{godina: 1898, rain: 56.4},
{godina: 1899, rain: 58.475},
{godina: 1900, rain: 66.85},
{godina: 1901, rain: 59.8416666666667},
{godina: 1902, rain: 58.125},
{godina: 1903, rain: 91.4666666666667},
{godina: 1904, rain: 65.6416666666667},
{godina: 1905, rain: 55.425},
{godina: 1906, rain: 70.0416666666667},
{godina: 1907, rain: 65.225},
{godina: 1908, rain: 58.95},
{godina: 1909, rain: 76.4166666666667},
{godina: 1910, rain: 71.2},
{godina: 1911, rain: 64.3833333333333},
{godina: 1912, rain: 78.9583333333333},
{godina: 1913, rain: 67.7166666666667},
{godina: 1914, rain: 78.2916666666667},
{godina: 1915, rain: 88.1666666666667},
{godina: 1916, rain: 75.0666666666667},
{godina: 1917, rain: 63.5916666666667},
{godina: 1918, rain: 67.9416666666667},
{godina: 1919, rain: 70.8583333333333},
{godina: 1920, rain: 66.8833333333333},
{godina: 1921, rain: 33.8083333333333},
{godina: 1922, rain: 72.8583333333333},
{godina: 1923, rain: 64.6833333333333},
{godina: 1924, rain: 85.7083333333333},
{godina: 1925, rain: 76.95},
{godina: 1926, rain: 62.175},
{godina: 1927, rain: 79.8083333333333},
{godina: 1928, rain: 75.9083333333333},
{godina: 1929, rain: 70.1416666666667},
{godina: 1930, rain: 75.4416666666667},
{godina: 1931, rain: 66.1083333333333},
{godina: 1932, rain: 69.5583333333334},
{godina: 1933, rain: 50.0083333333333},
{godina: 1934, rain: 66.6833333333333},
{godina: 1935, rain: 87.2583333333333},
{godina: 1936, rain: 71.825},
{godina: 1937, rain: 81.975},
{godina: 1938, rain: 57.5416666666667},
{godina: 1939, rain: 78.5583333333333},
{godina: 1940, rain: 66.8416666666667},
{godina: 1941, rain: 60.55},
{godina: 1942, rain: 60.7916666666667},
{godina: 1943, rain: 55.0666666666667},
{godina: 1944, rain: 55.5833333333333},
{godina: 1945, rain: 55.6583333333333},
{godina: 1946, rain: 77.5666666666666},
{godina: 1947, rain: 51.5083333333333},
{godina: 1948, rain: 67.2333333333333},
{godina: 1949, rain: 56.8166666666667},
{godina: 1950, rain: 69.2166666666667},
{godina: 1951, rain: 95.8666666666667},
{godina: 1952, rain: 66.25},
{godina: 1953, rain: 58.3666666666667},
{godina: 1954, rain: 73.825},
{godina: 1955, rain: 63.0833333333333},
{godina: 1956, rain: 59.75},
{godina: 1957, rain: 63.5333333333333},
{godina: 1958, rain: 77.0416666666667},
{godina: 1959, rain: 59.125},
{godina: 1960, rain: 97.225},
{godina: 1961, rain: 61.6666666666667},
{godina: 1962, rain: 58.6833333333333},
{godina: 1963, rain: 65.025},
{godina: 1964, rain: 50.9416666666667},
{godina: 1965, rain: 68.8083333333333},
{godina: 1966, rain: 74.6166666666667},
{godina: 1967, rain: 79.0666666666667},
{godina: 1968, rain: 74.9666666666667},
{godina: 1969, rain: 63.8},
{godina: 1970, rain: 65.35},
{godina: 1971, rain: 56.0333333333333},
{godina: 1972, rain: 63.4583333333333},
{godina: 1973, rain: 39.35},
{godina: 1974, rain: 82.275},
{godina: 1975, rain: 57.5833333333333},
{godina: 1976, rain: 56.55},
{godina: 1977, rain: 66.5333333333333},
{godina: 1978, rain: 62.8333333333333},
{godina: 1979, rain: 66.875},
{godina: 1980, rain: 58.8},
{godina: 1981, rain: 67.6833333333333},
{godina: 1982, rain: 71.7833333333333},
{godina: 1983, rain: 54.35},
{godina: 1984, rain: 67.0166666666667},
{godina: 1985, rain: 54.1333333333333},
{godina: 1986, rain: 68.025},
{godina: 1987, rain: 62.4333333333333},
{godina: 1988, rain: 52.7666666666667},
{godina: 1989, rain: 56.275},
{godina: 1990, rain: 55.1}]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1853,1995]).range([0, width]);
var y = d3.scale.linear().domain([20, 100]).range([height, 0]);

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