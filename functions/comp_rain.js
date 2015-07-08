function comp_graph_rain() {

d3.select("#graph").select("svg").remove();

var margin = {top: 10, right: 70, bottom: 30, left: 70},
    width = 850 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().domain([1850,2015]).range([0, width]);
var y = d3.scale.linear().domain([20, 120]).range([height, 0]);

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
var data = [{godina: 1910, rain: 59.4},
{godina: 1911, rain: 91.6666666666667},
{godina: 1912, rain: 64.1333333333333},
{godina: 1913, rain: 77.2166666666667},
{godina: 1914, rain: 77.7833333333333},
{godina: 1915, rain: 80.7083333333333},
{godina: 1916, rain: 62.5583333333333},
{godina: 1917, rain: 80.2083333333333},
{godina: 1918, rain: 75.85},
{godina: 1919, rain: 83.4333333333333},
{godina: 1920, rain: 56.4},
{godina: 1921, rain: 75.0333333333333},
{godina: 1922, rain: 80.475},
{godina: 1923, rain: 70.3416666666667},
{godina: 1924, rain: 78.0166666666667},
{godina: 1925, rain: 69.075},
{godina: 1926, rain: 81.8166666666667},
{godina: 1927, rain: 91.6833333333333},
{godina: 1928, rain: 61},
{godina: 1929, rain: 91.025},
{godina: 1930, rain: 77.9666666666667},
{godina: 1931, rain: 62.6666666666667},
{godina: 1932, rain: 52.675},
{godina: 1933, rain: 58.575},
{godina: 1934, rain: 84.7},
{godina: 1935, rain: 73.075},
{godina: 1936, rain: 64.3333333333333},
{godina: 1937, rain: 80.1666666666667},
{godina: 1938, rain: 72.4583333333333},
{godina: 1939, rain: 60.7833333333333},
{godina: 1940, rain: 66.2333333333333},
{godina: 1941, rain: 60.6083333333333},
{godina: 1942, rain: 58.7666666666667},
{godina: 1943, rain: 82.8416666666667},
{godina: 1944, rain: 67.5916666666667},
{godina: 1945, rain: 78.25},
{godina: 1946, rain: 73.8666666666667},
{godina: 1947, rain: 63.6},
{godina: 1948, rain: 65.9083333333333},
{godina: 1949, rain: 72.5583333333333},
{godina: 1950, rain: 88.125},
{godina: 1951, rain: 60.575},
{godina: 1952, rain: 57.6583333333333},
{godina: 1953, rain: 87.3},
{godina: 1954, rain: 51.8},
{godina: 1955, rain: 74.225},
{godina: 1956, rain: 68.5833333333333},
{godina: 1957, rain: 82.7666666666667},
{godina: 1958, rain: 61.9583333333333},
{godina: 1959, rain: 87.3666666666667},
{godina: 1960, rain: 77.025},
{godina: 1961, rain: 61.7333333333333},
{godina: 1962, rain: 66.8833333333333},
{godina: 1963, rain: 58.1166666666667},
{godina: 1964, rain: 84.9333333333333},
{godina: 1965, rain: 92.6666666666667},
{godina: 1966, rain: 81.3083333333333},
{godina: 1967, rain: 87.35},
{godina: 1968, rain: 77.525},
{godina: 1969, rain: 71.3083333333333},
{godina: 1970, rain: 57.8583333333333},
{godina: 1971, rain: 70.7666666666667},
{godina: 1972, rain: 61.2583333333333},
{godina: 1973, rain: 76.15},
{godina: 1974, rain: 53.8083333333333},
{godina: 1975, rain: 70.125},
{godina: 1976, rain: 73.9},
{godina: 1977, rain: 72.4833333333333},
{godina: 1978, rain: 81.5666666666667},
{godina: 1979, rain: 83.0416666666667},
{godina: 1980, rain: 76.65},
{godina: 1981, rain: 72.5666666666667},
{godina: 1982, rain: 84.125},
{godina: 1983, rain: 73.7333333333333},
{godina: 1984, rain: 60.1416666666667},
{godina: 1985, rain: 82.45},
{godina: 1986, rain: 66.0333333333333},
{godina: 1987, rain: 77.075},
{godina: 1988, rain: 58.9416666666667},
{godina: 1989, rain: 72.2083333333333} ]

var line = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.rain); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','steelblue')
    .attr("d", line(data));

//Cardiff
var data2 = [{godina: 1977, rain: 85.3666666666667},
{godina: 1978, rain: 85.8},
{godina: 1979, rain: 94.0583333333333},
{godina: 1980, rain: 90.1166666666667},
{godina: 1981, rain: 94.5166666666667},
{godina: 1982, rain: 99.0583333333333},
{godina: 1983, rain: 78.1},
{godina: 1984, rain: 118.525},
{godina: 1985, rain: 87.7166666666667},
{godina: 1986, rain: 88.6916666666667},
{godina: 1987, rain: 111.083333333333},
{godina: 1988, rain: 76.1333333333333},
{godina: 1989, rain: 88.55},
{godina: 1990, rain: 85.9583333333334},
{godina: 1991, rain: 78.925},
{godina: 1992, rain: 90.1},
{godina: 1993, rain: 109.8},
{godina: 1994, rain: 97.25},
{godina: 1995, rain: 88.5333333333333},
{godina: 1996, rain: 98.2916666666667},
{godina: 1997, rain: 106.016666666667},
{godina: 1998, rain: 117.616666666667},
{godina: 1999, rain: 105.825},
{godina: 2000, rain: 132.075},
{godina: 2001, rain: 94.9666666666667},
{godina: 2002, rain: 91.1416666666667},
{godina: 2003, rain: 87.575}]
    
var line2 = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.rain); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','red')
    .attr("d", line2(data2));

//Oxford
var data3 = [{godina: 1853, rain: 57.6666666666667},
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

var line3 = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.rain); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','yellow')
    .attr("d", line3(data3));

//Sheffield
var data4 = [{godina: 1883, rain: 72.9583333333333},
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

var line4 = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.rain); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','green')
    .attr("d", line4(data4));

//Southampton
var data5 = [{godina: 1855, rain: 61.5},
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

var line5 = d3.svg.line().interpolate("linear")
    .x(function(d,i) { 
        console.log('Crtanje X za vrijednost: ' + d + ' na indeksu: ' + i + ' koja je na : ' + x(i) + ' primjenom xScale.');
        return x(d.godina);
    })
    .y(function(d) { 
        console.log('Crtanje Y za vrijednost' + d + ' na vrijednosti: ' + y(d) + " yScale-a.");
        return y(d.rain); 
    })

lineSvg.append("path")
    .style('stroke-width', '2px')
    .style('stroke','purple')
    .attr("d", line5(data5)); 

}