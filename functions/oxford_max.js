function of_graph_max() {

document.getElementById("btn_of")
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

var m = [10, 70, 20, 70]; 
var w = 900 - m[1] - m[3]; 
var h = 550 - m[0] - m[2]; 
		
var data = [{godina: 1853, temp_max: 12.8166666666667},
{godina: 1854, temp_max: 14.075},
{godina: 1855, temp_max: 12.6916666666667},
{godina: 1856, temp_max: 13.4166666666667},
{godina: 1857, temp_max: 14.2},
{godina: 1858, temp_max: 13.5666666666667},
{godina: 1859, temp_max: 14.1},
{godina: 1860, temp_max: 11.9166666666667},
{godina: 1861, temp_max: 13.375},
{godina: 1862, temp_max: 13.3666666666667},
{godina: 1863, temp_max: 14.15},
{godina: 1864, temp_max: 13.525},
{godina: 1865, temp_max: 14.2583333333333},
{godina: 1866, temp_max: 14.0583333333333},
{godina: 1867, temp_max: 13.3166666666667},
{godina: 1868, temp_max: 15.2916666666667},
{godina: 1869, temp_max: 14.1916666666667},
{godina: 1870, temp_max: 13.7833333333333},
{godina: 1871, temp_max: 13.4333333333333},
{godina: 1872, temp_max: 14.3583333333333},
{godina: 1873, temp_max: 13.4583333333333},
{godina: 1874, temp_max: 14.2083333333333},
{godina: 1875, temp_max: 13.65},
{godina: 1876, temp_max: 14.2},
{godina: 1877, temp_max: 13.8583333333333},
{godina: 1878, temp_max: 13.7083333333333},
{godina: 1879, temp_max: 10.9166666666667},
{godina: 1880, temp_max: 13.4166666666667},
{godina: 1881, temp_max: 13.2666666666667},
{godina: 1882, temp_max: 13.8083333333333},
{godina: 1883, temp_max: 13.65},
{godina: 1884, temp_max: 14.4166666666667},
{godina: 1885, temp_max: 12.95},
{godina: 1886, temp_max: 12.9166666666667},
{godina: 1887, temp_max: 12.8833333333333},
{godina: 1888, temp_max: 12.275},
{godina: 1889, temp_max: 12.8083333333333},
{godina: 1890, temp_max: 12.9416666666667},
{godina: 1891, temp_max: 12.5916666666667},
{godina: 1892, temp_max: 12.5083333333333},
{godina: 1893, temp_max: 14.9166666666667},
{godina: 1894, temp_max: 13.3},
{godina: 1895, temp_max: 13.4333333333333},
{godina: 1896, temp_max: 13.8416666666667},
{godina: 1897, temp_max: 13.6},
{godina: 1898, temp_max: 14.4833333333333},
{godina: 1899, temp_max: 14.6583333333333},
{godina: 1900, temp_max: 13.9916666666667},
{godina: 1901, temp_max: 13.5},
{godina: 1902, temp_max: 13.0166666666667},
{godina: 1903, temp_max: 13.3166666666667},
{godina: 1904, temp_max: 13.2666666666667},
{godina: 1905, temp_max: 13.3333333333333},
{godina: 1906, temp_max: 14.2833333333333},
{godina: 1907, temp_max: 13.325},
{godina: 1908, temp_max: 13.5916666666667},
{godina: 1909, temp_max: 12.9083333333333},
{godina: 1910, temp_max: 13.2416666666667},
{godina: 1911, temp_max: 14.825},
{godina: 1912, temp_max: 13.6},
{godina: 1913, temp_max: 14.0416666666667},
{godina: 1914, temp_max: 14.5666666666667},
{godina: 1915, temp_max: 13.5166666666667},
{godina: 1916, temp_max: 13.2333333333333},
{godina: 1917, temp_max: 12.675},
{godina: 1918, temp_max: 13.725},
{godina: 1919, temp_max: 12.8833333333333},
{godina: 1920, temp_max: 13.7166666666667},
{godina: 1921, temp_max: 15.6083333333333},
{godina: 1922, temp_max: 13.1583333333333},
{godina: 1923, temp_max: 13.4833333333333},
{godina: 1924, temp_max: 13.525},
{godina: 1925, temp_max: 13.7166666666667},
{godina: 1926, temp_max: 14.05},
{godina: 1927, temp_max: 13.3},
{godina: 1928, temp_max: 14.4666666666667},
{godina: 1929, temp_max: 14.0916666666667},
{godina: 1930, temp_max: 13.7083333333333},
{godina: 1931, temp_max: 13.0916666666667},
{godina: 1932, temp_max: 13.5166666666667},
{godina: 1933, temp_max: 14.5833333333333},
{godina: 1934, temp_max: 14.7416666666667},
{godina: 1935, temp_max: 14.2833333333333},
{godina: 1936, temp_max: 13.6666666666667},
{godina: 1937, temp_max: 14.175},
{godina: 1938, temp_max: 14.8666666666667},
{godina: 1939, temp_max: 13.95},
{godina: 1940, temp_max: 13.8333333333333},
{godina: 1941, temp_max: 13.4083333333333},
{godina: 1942, temp_max: 13.5},
{godina: 1943, temp_max: 14.875},
{godina: 1944, temp_max: 14.2166666666667},
{godina: 1945, temp_max: 14.8},
{godina: 1946, temp_max: 13.8916666666667},
{godina: 1947, temp_max: 14.2333333333333},
{godina: 1948, temp_max: 14.6666666666667},
{godina: 1949, temp_max: 15.55},
{godina: 1950, temp_max: 13.6583333333333},
{godina: 1951, temp_max: 13.6416666666667},
{godina: 1952, temp_max: 13.6583333333333},
{godina: 1953, temp_max: 14.0083333333333},
{godina: 1954, temp_max: 13.375},
{godina: 1955, temp_max: 13.9166666666667},
{godina: 1956, temp_max: 13.075},
{godina: 1957, temp_max: 14.4},
{godina: 1958, temp_max: 13.5333333333333},
{godina: 1959, temp_max: 15.25},
{godina: 1960, temp_max: 13.8333333333333},
{godina: 1961, temp_max: 14.5166666666667},
{godina: 1962, temp_max: 12.7333333333333},
{godina: 1963, temp_max: 12.3166666666667},
{godina: 1964, temp_max: 13.75},
{godina: 1965, temp_max: 13.1166666666667},
{godina: 1966, temp_max: 13.5583333333333},
{godina: 1967, temp_max: 13.8},
{godina: 1968, temp_max: 13.0916666666667},
{godina: 1969, temp_max: 13.6166666666667},
{godina: 1970, temp_max: 13.9333333333333},
{godina: 1971, temp_max: 13.925},
{godina: 1972, temp_max: 13.3583333333333},
{godina: 1973, temp_max: 14.05},
{godina: 1974, temp_max: 13.7},
{godina: 1975, temp_max: 14.4333333333333},
{godina: 1976, temp_max: 14.7},
{godina: 1977, temp_max: 13.4083333333333},
{godina: 1978, temp_max: 13.5833333333333},
{godina: 1979, temp_max: 13.1833333333333},
{godina: 1980, temp_max: 13.6083333333333},
{godina: 1981, temp_max: 13.3666666666667},
{godina: 1982, temp_max: 14.3083333333333},
{godina: 1983, temp_max: 14.4},
{godina: 1984, temp_max: 14.275},
{godina: 1985, temp_max: 12.9916666666667},
{godina: 1986, temp_max: 12.9833333333333},
{godina: 1987, temp_max: 13.1916666666667},
{godina: 1988, temp_max: 13.8083333333333},
{godina: 1989, temp_max: 15.3833333333333},
{godina: 1990, temp_max: 15.4},
{godina: 1991, temp_max: 13.5666666666667},
{godina: 1992, temp_max: 13.9666666666667},
{godina: 1993, temp_max: 13.7333333333333},
{godina: 1994, temp_max: 14.5166666666667},
{godina: 1995, temp_max: 15.375},
{godina: 1996, temp_max: 13.775},
{godina: 1997, temp_max: 15.2166666666667},
{godina: 1998, temp_max: 14.7833333333333},
{godina: 1999, temp_max: 15.1833333333333}]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1851,2002]).range([0, width]);
var y = d3.scale.linear().domain([10, 16]).range([height, 0]);

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