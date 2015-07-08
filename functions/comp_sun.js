function comp_graph_sun() {

d3.select("#graph").select("svg").remove();

var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1894,2015]).range([0, width]);
var y = d3.scale.linear().domain([80, 180]).range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(10).tickFormat(d3.format('0f'));

var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(5).tickSubdivide(true);

var lineSvg = d3.select("#graph")
.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
.append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

// Add the X Axis
lineSvg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

// Add the Y Axis
lineSvg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

//Bradford 
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

var line = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.sun); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','steelblue')
    .attr("d", line(data));

//Cardiff
var data2 = [{godina: 1977, sun: 109.083333333333},
{godina: 1978, sun: 122.8},
{godina: 1979, sun: 122.066666666667},
{godina: 1980, sun: 112.7},
{godina: 1981, sun: 123.75},
{godina: 1982, sun: 113.841666666667},
{godina: 1983, sun: 134.208333333333},
{godina: 1984, sun: 117.725},
{godina: 1985, sun: 114.875},
{godina: 1986, sun: 126.083333333333},
{godina: 1987, sun: 118.4},
{godina: 1988, sun: 145.333333333333},
{godina: 1989, sun: 142.008333333333},
{godina: 1990, sun: 128.133333333333},
{godina: 1991, sun: 121.358333333333},
{godina: 1992, sun: 113.933333333333},
{godina: 1993, sun: 131.358333333333},
{godina: 1994, sun: 147.05}]
    
var line2 = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.sun); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','red')
    .attr("d", line2(data2));

//Oxford
var data3 = [{godina: 1929, sun: 145.033333333333},
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

var line3 = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.sun); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','yellow')
    .attr("d", line3(data3));

//Sheffield
var data4 = [{godina: 1929, sun: 106.341666666667},
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

var line4 = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.sun); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','green')
    .attr("d", line4(data4));

//Southampton
var data5 = [{godina: 1895, sun: 150.808333333333},
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

var line5 = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.sun); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','purple')
    .attr("d", line5(data5)); 

}