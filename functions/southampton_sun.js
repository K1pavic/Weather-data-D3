function sh_graph_sun() {

document.getElementById("btn_sh")
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

var data = [{godina: 1895, sun: 150.808333333333},
{godina: 1896, sun: 135.675},
{godina: 1897, sun: 143.333333333333},
{godina: 1898, sun: 132.708333333333},
{godina: 1899, sun: 166.633333333333},
{godina: 1900, sun: 141.35},
{godina: 1901, sun: 150.541666666667},
{godina: 1902, sun: 125.575},
{godina: 1903, sun: 135.466666666667},
{godina: 1904, sun: 139.225},
{godina: 1905, sun: 137.891666666667},
{godina: 1906, sun: 157.625},
{godina: 1907, sun: 142.375},
{godina: 1908, sun: 148.95},
{godina: 1909, sun: 145.625},
{godina: 1910, sun: 126.408333333333},
{godina: 1911, sun: 159.491666666667},
{godina: 1912, sun: 114.475},
{godina: 1913, sun: 118.2},
{godina: 1914, sun: 145.733333333333},
{godina: 1915, sun: 135.766666666667},
{godina: 1916, sun: 130.4},
{godina: 1917, sun: 132.625},
{godina: 1918, sun: 145.316666666667},
{godina: 1919, sun: 139.983333333333},
{godina: 1920, sun: 119.716666666667},
{godina: 1921, sun: 154.783333333333},
{godina: 1922, sun: 136.708333333333},
{godina: 1923, sun: 137.166666666667},
{godina: 1924, sun: 135.75},
{godina: 1925, sun: 152.683333333333},
{godina: 1926, sun: 126.433333333333},
{godina: 1927, sun: 128.133333333333},
{godina: 1928, sun: 147.141666666667},
{godina: 1929, sun: 155.891666666667},
{godina: 1930, sun: 130.741666666667},
{godina: 1931, sun: 113.008333333333},
{godina: 1932, sun: 106.583333333333},
{godina: 1933, sun: 153.491666666667},
{godina: 1934, sun: 133.675},
{godina: 1935, sun: 131.616666666667},
{godina: 1936, sun: 119.291666666667},
{godina: 1937, sun: 126.341666666667},
{godina: 1938, sun: 124.1},
{godina: 1939, sun: 135.091666666667},
{godina: 1940, sun: 144.991666666667},
{godina: 1941, sun: 138.5083333333333},
{godina: 1942, sun: 132.866666666667},
{godina: 1943, sun: 151.008333333333},
{godina: 1944, sun: 140.341666666667},
{godina: 1945, sun: 103.275},
{godina: 1946, sun: 117.591666666667},
{godina: 1947, sun: 127.1},
{godina: 1948, sun: 139.041666666667},
{godina: 1949, sun: 171.3},
{godina: 1950, sun: 144.258333333333},
{godina: 1951, sun: 140.608333333333},
{godina: 1952, sun: 139.141666666667},
{godina: 1953, sun: 138.75},
{godina: 1954, sun: 122.508333333333},
{godina: 1955, sun: 148.491666666667},
{godina: 1956, sun: 137.725},
{godina: 1957, sun: 136.425},
{godina: 1958, sun: 116.833333333333},
{godina: 1959, sun: 165.15},
{godina: 1960, sun: 127.091666666667},
{godina: 1961, sun: 136.483333333333},
{godina: 1962, sun: 131.191666666667},
{godina: 1963, sun: 122.35},
{godina: 1964, sun: 124.033333333333},
{godina: 1965, sun: 126.8},
{godina: 1966, sun: 122.75},
{godina: 1967, sun: 141.8},
{godina: 1968, sun: 123.383333333333},
{godina: 1969, sun: 140.716666666667},
{godina: 1970, sun: 141.575},
{godina: 1971, sun: 144.525},
{godina: 1972, sun: 131.45},
{godina: 1973, sun: 144.4},
{godina: 1974, sun: 138.675},
{godina: 1975, sun: 152.091666666667},
{godina: 1976, sun: 156.508333333333},
{godina: 1977, sun: 129.9},
{godina: 1978, sun: 127.066666666667},
{godina: 1979, sun: 136.125},
{godina: 1980, sun:134.55232}]

// Set the dimensions of the canvas / graph
var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1893,1985]).range([0, width]);
var y = d3.scale.linear().domain([100, 180]).range([height, 0]);

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