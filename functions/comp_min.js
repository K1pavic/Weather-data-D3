function comp_graph_min() {

d3.select("#graph").select("svg").remove();

var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1850,2015]).range([0, width]);
var y = d3.scale.linear().domain([4, 8]).range([height, 0]);

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
var data = [{godina: 1907, temp_min: 4.98333333333333},
{godina: 1908, temp_min: 4.475},
{godina: 1909, temp_min: 5.15},
{godina: 1910, temp_min: 5.89166666666667},
{godina: 1911, temp_min: 5.31666666666667},
{godina: 1912, temp_min: 5.83333333333333},
{godina: 1913, temp_min: 5.8},
{godina: 1914, temp_min: 4.60833333333333},
{godina: 1915, temp_min: 5.33333333333333},
{godina: 1916, temp_min: 4.55833333333333},
{godina: 1917, temp_min: 5.4},
{godina: 1918, temp_min: 4.29166666666667},
{godina: 1919, temp_min: 5.71666666666667},
{godina: 1920, temp_min: 6.05},
{godina: 1921, temp_min: 4.825},
{godina: 1922, temp_min: 5.3},
{godina: 1923, temp_min: 5.54166666666667},
{godina: 1924, temp_min: 5.15833333333333},
{godina: 1925, temp_min: 5.55833333333333},
{godina: 1926, temp_min: 5.33333333333333},
{godina: 1927, temp_min: 5.31666666666667},
{godina: 1928, temp_min: 5},
{godina: 1929, temp_min: 5.39166666666667},
{godina: 1930, temp_min: 5.225},
{godina: 1931, temp_min: 5.675},
{godina: 1932, temp_min: 5.875},
{godina: 1933, temp_min: 6.14166666666667},
{godina: 1934, temp_min: 5.74166666666667},
{godina: 1935, temp_min: 5.45833333333333},
{godina: 1936, temp_min: 5.63333333333333},
{godina: 1937, temp_min: 6.43333333333333},
{godina: 1938, temp_min: 5.95},
{godina: 1939, temp_min: 4.85},
{godina: 1940, temp_min: 5.16666666666667},
{godina: 1941, temp_min: 4.99166666666667},
{godina: 1942, temp_min: 5.825},
{godina: 1943, temp_min: 5.56666666666667},
{godina: 1944, temp_min: 6.18333333333333},
{godina: 1945, temp_min: 5.66666666666667},
{godina: 1946, temp_min: 5.58333333333333},
{godina: 1947, temp_min: 6.00833333333333},
{godina: 1948, temp_min: 6.425},
{godina: 1949, temp_min: 5.61666666666667},
{godina: 1950, temp_min: 5.21666666666667},
{godina: 1951, temp_min: 5.21666666666667},
{godina: 1952, temp_min: 6.15833333333333},
{godina: 1953, temp_min: 5.49166666666667},
{godina: 1954, temp_min: 5.15},
{godina: 1955, temp_min: 5.125},
{godina: 1956, temp_min: 6.025},
{godina: 1957, temp_min: 5.45},
{godina: 1958, temp_min: 6.25},
{godina: 1959, temp_min: 5.88333333333333},
{godina: 1960, temp_min: 5.85},
{godina: 1961, temp_min: 4.75833333333333},
{godina: 1962, temp_min: 4.81666666666667},
{godina: 1963, temp_min: 5.66666666666667},
{godina: 1964, temp_min: 5.24166666666667},
{godina: 1965, temp_min: 5.7},
{godina: 1966, temp_min: 5.83333333333333},
{godina: 1967, temp_min: 5.65833333333333},
{godina: 1968, temp_min: 5.25833333333333},
{godina: 1969, temp_min: 5.56666666666667},
{godina: 1970, temp_min: 5.78333333333333},
{godina: 1971, temp_min: 5.35},
{godina: 1972, temp_min: 5.525},
{godina: 1973, temp_min: 5.68333333333333},
{godina: 1974, temp_min: 5.875},
{godina: 1975, temp_min: 5.79166666666667},
{godina: 1976, temp_min: 5.44166666666667},
{godina: 1977, temp_min: 5.475},
{godina: 1978, temp_min: 4.78333333333333},
{godina: 1979, temp_min: 5.425},
{godina: 1980, temp_min: 5.125},
{godina: 1981, temp_min: 5.53333333333333},
{godina: 1982, temp_min: 5.94166666666667},
{godina: 1983, temp_min: 5.74166666666667},
{godina: 1984, temp_min: 5.26666666666667},
{godina: 1985, temp_min: 5.025},
{godina: 1986, temp_min: 5.58333333333333},
{godina: 1987, temp_min: 6.1},
{godina: 1988, temp_min: 6.45833333333333},
{godina: 1989, temp_min: 6.30833333333333},
{godina: 1990, temp_min: 5.53333333333333},
{godina: 1991, temp_min: 5.85833333333333},
{godina: 1992, temp_min: 5.475},
{godina: 1993, temp_min: 6.01666666666667},
{godina: 1994, temp_min: 6.09166666666667},
{godina: 1995, temp_min: 5.48333333333333},
{godina: 1996, temp_min: 6.625},
{godina: 1997, temp_min: 6.55},
{godina: 1998, temp_min: 6.74166666666667},
{godina: 1999, temp_min: 6.36666666666667},
{godina: 2000, temp_min: 5.84166666666667},
{godina: 2001, temp_min: 6.83333333333333},
{godina: 2002, temp_min: 6.30833333333333},
{godina: 2003, temp_min: 6.88333333333333},
{godina: 2004, temp_min: 6.625},
{godina: 2005, temp_min: 7.1},
{godina: 2006, temp_min: 6.766666666} ]

var line = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.temp_min); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','steelblue')
    .attr("d", line(data));

//Cardiff
var data2 = [{godina: 1977, temp_min: 6.425},
{godina: 1978, temp_min: 5.96666666666667},
{godina: 1979, temp_min: 6.46666666666667},
{godina: 1980, temp_min: 7.05},
{godina: 1981, temp_min: 6.5},
{godina: 1982, temp_min: 7.25},
{godina: 1983, temp_min: 6.8},
{godina: 1984, temp_min: 6.375},
{godina: 1985, temp_min: 5.95833333333333},
{godina: 1986, temp_min: 6.08333333333333},
{godina: 1987, temp_min: 7.1},
{godina: 1988, temp_min: 7.24166666666667},
{godina: 1989, temp_min: 7.63333333333333},
{godina: 1990, temp_min: 6.775},
{godina: 1991, temp_min: 7.19166666666667},
{godina: 1992, temp_min: 6.8},
{godina: 1993, temp_min: 6.80833333333333},
{godina: 1994, temp_min: 7.69166666666667},
{godina: 1995, temp_min: 6.59166666666667},
{godina: 1996, temp_min: 7.08333333333333},
{godina: 1997, temp_min: 7.66666666666667},
{godina: 1998, temp_min: 6.925},
{godina: 1999, temp_min: 6.86666666666667},
{godina: 2000, temp_min: 6.89166666666667},
{godina: 2001, temp_min: 7.51666666666667}]
    
var line2 = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.temp_min); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','red')
    .attr("d", line2(data2));

//Oxford
var data3 = [{godina: 1853, temp_min: 5.11666666666667},
{godina: 1854, temp_min: 5.3},
{godina: 1855, temp_min: 4.96666666666667},
{godina: 1856, temp_min: 5.65},
{godina: 1857, temp_min: 6.34166666666667},
{godina: 1858, temp_min: 5.425},
{godina: 1859, temp_min: 6.09166666666667},
{godina: 1860, temp_min: 4.8},
{godina: 1861, temp_min: 6.14166666666667},
{godina: 1862, temp_min: 6.44166666666667},
{godina: 1863, temp_min: 5.94166666666667},
{godina: 1864, temp_min: 5.15},
{godina: 1865, temp_min: 5.925},
{godina: 1866, temp_min: 6.24166666666667},
{godina: 1867, temp_min: 5.55833333333333},
{godina: 1868, temp_min: 6.425},
{godina: 1869, temp_min: 6.26666666666667},
{godina: 1870, temp_min: 5.25833333333333},
{godina: 1871, temp_min: 5.54166666666667},
{godina: 1872, temp_min: 6.58333333333333},
{godina: 1873, temp_min: 5.64166666666667},
{godina: 1874, temp_min: 5.74166666666667},
{godina: 1875, temp_min: 6.36666666666667},
{godina: 1876, temp_min: 6.46666666666667},
{godina: 1877, temp_min: 6.00833333333333},
{godina: 1878, temp_min: 6.425},
{godina: 1879, temp_min: 4.46666666666667},
{godina: 1880, temp_min: 6},
{godina: 1881, temp_min: 5.49166666666667},
{godina: 1882, temp_min: 6.44166666666667},
{godina: 1883, temp_min: 6.21666666666667},
{godina: 1884, temp_min: 6.475},
{godina: 1885, temp_min: 5.425},
{godina: 1886, temp_min: 5.55833333333333},
{godina: 1887, temp_min: 4.59166666666667},
{godina: 1888, temp_min: 5.18333333333333},
{godina: 1889, temp_min: 5.45833333333333},
{godina: 1890, temp_min: 5.175},
{godina: 1891, temp_min: 4.98333333333333},
{godina: 1892, temp_min: 4.575},
{godina: 1893, temp_min: 5.80833333333333},
{godina: 1894, temp_min: 6.025},
{godina: 1895, temp_min: 5.2},
{godina: 1896, temp_min: 6.10833333333333},
{godina: 1897, temp_min: 6.23333333333333},
{godina: 1898, temp_min: 6.55},
{godina: 1899, temp_min: 6.06666666666667},
{godina: 1900, temp_min: 6.3},
{godina: 1901, temp_min: 5.475},
{godina: 1902, temp_min: 5.75},
{godina: 1903, temp_min: 6.36666666666667},
{godina: 1904, temp_min: 5.69166666666667},
{godina: 1905, temp_min: 5.95},
{godina: 1906, temp_min: 5.975},
{godina: 1907, temp_min: 5.725},
{godina: 1908, temp_min: 6},
{godina: 1909, temp_min: 5.35},
{godina: 1910, temp_min: 6.24166666666667},
{godina: 1911, temp_min: 6.74166666666667},
{godina: 1912, temp_min: 6.36666666666667},
{godina: 1913, temp_min: 6.75},
{godina: 1914, temp_min: 6.31666666666667},
{godina: 1915, temp_min: 5.60833333333333},
{godina: 1916, temp_min: 5.94166666666667},
{godina: 1917, temp_min: 5.29166666666667},
{godina: 1918, temp_min: 6.13333333333333},
{godina: 1919, temp_min: 4.9},
{godina: 1920, temp_min: 6.275},
{godina: 1921, temp_min: 6.6},
{godina: 1922, temp_min: 5.275},
{godina: 1923, temp_min: 5.81666666666667},
{godina: 1924, temp_min: 6.13333333333333},
{godina: 1925, temp_min: 5.7},
{godina: 1926, temp_min: 6.34166666666667},
{godina: 1927, temp_min: 6.05},
{godina: 1928, temp_min: 5.96666666666667},
{godina: 1929, temp_min: 5.00833333333333},
{godina: 1930, temp_min: 6.225},
{godina: 1931, temp_min: 5.88333333333333},
{godina: 1932, temp_min: 6.14166666666667},
{godina: 1933, temp_min: 6.08333333333333},
{godina: 1934, temp_min: 6.31666666666667},
{godina: 1935, temp_min: 6.29166666666667},
{godina: 1936, temp_min: 5.86666666666667},
{godina: 1937, temp_min: 6.20833333333333},
{godina: 1938, temp_min: 6.61666666666667},
{godina: 1939, temp_min: 6.45},
{godina: 1940, temp_min: 5.325},
{godina: 1941, temp_min: 5.71666666666667},
{godina: 1942, temp_min: 5.6},
{godina: 1943, temp_min: 6.4},
{godina: 1944, temp_min: 6.08333333333333},
{godina: 1945, temp_min: 6.84166666666667},
{godina: 1946, temp_min: 6.15833333333333},
{godina: 1947, temp_min: 6.05833333333333},
{godina: 1948, temp_min: 6.53333333333334},
{godina: 1949, temp_min: 6.86666666666667},
{godina: 1950, temp_min: 6.3},
{godina: 1951, temp_min: 6.04166666666667},
{godina: 1952, temp_min: 5.74166666666667},
{godina: 1953, temp_min: 6.30833333333333},
{godina: 1954, temp_min: 6.1},
{godina: 1955, temp_min: 5.66666666666667},
{godina: 1956, temp_min: 5.45},
{godina: 1957, temp_min: 6.8},
{godina: 1958, temp_min: 6.51666666666667},
{godina: 1959, temp_min: 6.65},
{godina: 1960, temp_min: 6.73333333333333},
{godina: 1961, temp_min: 6.70833333333333},
{godina: 1962, temp_min: 5.35},
{godina: 1963, temp_min: 5.4},
{godina: 1964, temp_min: 6.33333333333333},
{godina: 1965, temp_min: 5.8},
{godina: 1966, temp_min: 6.58333333333333},
{godina: 1967, temp_min: 6.825},
{godina: 1968, temp_min: 6.64166666666667},
{godina: 1969, temp_min: 6.39166666666667},
{godina: 1970, temp_min: 6.44166666666667},
{godina: 1971, temp_min: 6.49166666666667},
{godina: 1972, temp_min: 6.275},
{godina: 1973, temp_min: 6.30833333333333},
{godina: 1974, temp_min: 6.51666666666667},
{godina: 1975, temp_min: 6.50833333333333},
{godina: 1976, temp_min: 6.56666666666667},
{godina: 1977, temp_min: 6.44166666666667},
{godina: 1978, temp_min: 6.14166666666667},
{godina: 1979, temp_min: 5.86666666666667},
{godina: 1980, temp_min: 6.38333333333333},
{godina: 1981, temp_min: 6.38333333333333},
{godina: 1982, temp_min: 6.86666666666667},
{godina: 1983, temp_min: 7.14166666666667},
{godina: 1984, temp_min: 6.61666666666667},
{godina: 1985, temp_min: 5.9},
{godina: 1986, temp_min: 5.75},
{godina: 1987, temp_min: 6.28333333333333},
{godina: 1988, temp_min: 6.75},
{godina: 1989, temp_min: 7.3},
{godina: 1990, temp_min: 7.29166666666667},
{godina: 1991, temp_min: 6.39166666666667},
{godina: 1992, temp_min: 6.925},
{godina: 1993, temp_min: 6.71666666666667},
{godina: 1994, temp_min: 7.5},
{godina: 1995, temp_min: 7.16666666666667},
{godina: 1996, temp_min: 6.10833333333333},
{godina: 1997, temp_min: 7.39166666666667},
{godina: 1998, temp_min: 7.31666666666667},
{godina: 1999, temp_min: 7.475},
{godina: 2000, temp_min: 7.54166666666667},
{godina: 2001, temp_min: 6.8},
{godina: 2002, temp_min: 7.4},
{godina: 2003, temp_min: 6.33333333333333}]

var line3 = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.temp_min); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','yellow')
    .attr("d", line3(data3));

//Sheffield
var data4 = [{godina: 1883, temp_min: 5.49166666666667},
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

var line4 = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.temp_min); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','green')
    .attr("d", line4(data4));

//Southampton
var data5 = [{godina: 1855, temp_min: 5.35833333333333},
{godina: 1856, temp_min: 6.35},
{godina: 1857, temp_min: 7.3},
{godina: 1858, temp_min: 6.275},
{godina: 1859, temp_min: 7.05833333333333},
{godina: 1860, temp_min: 5.79166666666667},
{godina: 1861, temp_min: 6.625},
{godina: 1862, temp_min: 6.81666666666667},
{godina: 1863, temp_min: 7.01666666666667},
{godina: 1864, temp_min: 5.96666666666667},
{godina: 1865, temp_min: 6.675},
{godina: 1866, temp_min: 7.11666666666667},
{godina: 1867, temp_min: 6.15},
{godina: 1868, temp_min: 7.26666666666667},
{godina: 1869, temp_min: 6.7},
{godina: 1870, temp_min: 5.84166666666667},
{godina: 1871, temp_min: 6.20833333333333},
{godina: 1872, temp_min: 7.14166666666667},
{godina: 1873, temp_min: 6.475},
{godina: 1874, temp_min: 6.39166666666667},
{godina: 1875, temp_min: 6.59166666666667},
{godina: 1876, temp_min: 7.04166666666667},
{godina: 1877, temp_min: 6.75},
{godina: 1878, temp_min: 6.86666666666667},
{godina: 1879, temp_min: 5.21666666666667},
{godina: 1880, temp_min: 6.20833333333333},
{godina: 1881, temp_min: 5.88333333333333},
{godina: 1882, temp_min: 6.825},
{godina: 1883, temp_min: 6.25},
{godina: 1884, temp_min: 6.95},
{godina: 1885, temp_min: 5.90833333333333},
{godina: 1886, temp_min: 6.11666666666667},
{godina: 1887, temp_min: 5.15},
{godina: 1888, temp_min: 5.71666666666667},
{godina: 1889, temp_min: 6.33333333333333},
{godina: 1890, temp_min: 6.00833333333333},
{godina: 1891, temp_min: 5.81666666666667},
{godina: 1892, temp_min: 5.53333333333333},
{godina: 1893, temp_min: 6.61666666666667},
{godina: 1894, temp_min: 6.85833333333333},
{godina: 1895, temp_min: 5.91666666666667},
{godina: 1896, temp_min: 6.59166666666667},
{godina: 1897, temp_min: 7.13333333333333},
{godina: 1898, temp_min: 7.26666666666667},
{godina: 1899, temp_min: 6.9},
{godina: 1900, temp_min: 6.96666666666667},
{godina: 1901, temp_min: 6.23333333333333},
{godina: 1902, temp_min: 6.53333333333333},
{godina: 1903, temp_min: 7.13333333333333},
{godina: 1904, temp_min: 6.74166666666667},
{godina: 1905, temp_min: 6.73333333333333},
{godina: 1906, temp_min: 6.73333333333333},
{godina: 1907, temp_min: 6.61666666666667},
{godina: 1908, temp_min: 6.7},
{godina: 1909, temp_min: 5.99166666666667},
{godina: 1910, temp_min: 6.94166666666667},
{godina: 1911, temp_min: 7.225},
{godina: 1912, temp_min: 7.03333333333333},
{godina: 1913, temp_min: 7.46666666666667},
{godina: 1914, temp_min: 7.03333333333333},
{godina: 1915, temp_min: 6.49166666666667},
{godina: 1916, temp_min: 6.76666666666667},
{godina: 1917, temp_min: 5.83333333333333},
{godina: 1918, temp_min: 6.86666666666667},
{godina: 1919, temp_min: 5.54166666666667},
{godina: 1920, temp_min: 6.84166666666667},
{godina: 1921, temp_min: 7},
{godina: 1922, temp_min: 6.09166666666667},
{godina: 1923, temp_min: 6.05},
{godina: 1924, temp_min: 6.50833333333333},
{godina: 1925, temp_min: 6.375},
{godina: 1926, temp_min: 7.21666666666667},
{godina: 1927, temp_min: 6.775},
{godina: 1928, temp_min: 6.825},
{godina: 1929, temp_min: 5.875},
{godina: 1930, temp_min: 6.98333333333333},
{godina: 1931, temp_min: 6.45833333333333},
{godina: 1932, temp_min: 6.61666666666667},
{godina: 1933, temp_min: 6.65},
{godina: 1934, temp_min: 6.575},
{godina: 1935, temp_min: 7.11666666666667},
{godina: 1936, temp_min: 6.63333333333333},
{godina: 1937, temp_min: 7.05},
{godina: 1938, temp_min: 7.225},
{godina: 1939, temp_min: 6.625},
{godina: 1940, temp_min: 6.13333333333333},
{godina: 1941, temp_min: 6.25833333333333},
{godina: 1942, temp_min: 6.01666666666667},
{godina: 1943, temp_min: 6.93333333333333},
{godina: 1944, temp_min: 6.46666666666667},
{godina: 1945, temp_min: 7.31666666666667},
{godina: 1946, temp_min: 6.54166666666667},
{godina: 1947, temp_min: 6.69166666666667},
{godina: 1948, temp_min: 6.91666666666667},
{godina: 1949, temp_min: 7.375},
{godina: 1950, temp_min: 6.93333333333333},
{godina: 1951, temp_min: 6.75},
{godina: 1952, temp_min: 6.39166666666667},
{godina: 1953, temp_min: 6.94166666666667},
{godina: 1954, temp_min: 6.40833333333333},
{godina: 1955, temp_min: 6.225},
{godina: 1956, temp_min: 5.925},
{godina: 1957, temp_min: 7.43333333333333},
{godina: 1958, temp_min: 7.06666666666667},
{godina: 1959, temp_min: 7.11666666666667},
{godina: 1960, temp_min: 7.15833333333333},
{godina: 1961, temp_min: 7.39166666666667},
{godina: 1962, temp_min: 5.99166666666667},
{godina: 1963, temp_min: 6},
{godina: 1964, temp_min: 6.975},
{godina: 1965, temp_min: 6.33333333333333},
{godina: 1966, temp_min: 7.15},
{godina: 1967, temp_min: 7.15},
{godina: 1968, temp_min: 7.11666666666667},
{godina: 1969, temp_min: 7.03333333333333},
{godina: 1970, temp_min: 7.25833333333333},
{godina: 1971, temp_min: 7.18333333333333},
{godina: 1972, temp_min: 7.06666666666667},
{godina: 1973, temp_min: 6.93333333333333},
{godina: 1974, temp_min: 7.39166666666667},
{godina: 1975, temp_min: 7.35833333333333},
{godina: 1976, temp_min: 7.48333333333333},
{godina: 1977, temp_min: 7.45}]

var line5 = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.temp_min); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','purple')
    .attr("d", line5(data5)); 

}