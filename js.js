var bradford = d3.select("svg")
	.append("circle")
	.attr("cx", 240)
	.attr("cy", 325)
	.attr("r", 5)
	.style("fill", "#000000");

var cardiff = d3.select("svg")
	.append("circle")
	.attr("cx", 180)
	.attr("cy", 495)
	.attr("r", 5)
	.style("fill", "#000000");

var oxford = d3.select("svg")
	.append("circle")
	.attr("cx", 280)
	.attr("cy", 465)
	.attr("r", 5)
	.style("fill", "#000000");

var sheffield = d3.select("svg")
	.append("circle")
	.attr("cx", 260)
	.attr("cy", 360)
	.attr("r", 5)
	.style("fill", "#000000");

var southampton = d3.select("svg")
	.append("circle")
	.attr("cx", 250)
	.attr("cy", 535)
	.attr("r", 5)
	.style("fill", "#000000");

///////////////////////////////////////////////////

function active_bf() {

	document.getElementById("cd")
	.setAttribute("fill", "#ffffff");
	document.getElementById("of")
	.setAttribute("fill", "#ffffff");
	document.getElementById("sf")
	.setAttribute("fill", "#ffffff");
	document.getElementById("sh")
	.setAttribute("fill", "#ffffff");

	document.getElementById("bf")
	.setAttribute("fill", "#000000");

	document.getElementById("btn_cd")
	.style.color = "#ffffff";	
	document.getElementById("btn_of")
	.style.color = "#ffffff";	
	document.getElementById("btn_sf")
	.style.color = "#ffffff";	
	document.getElementById("btn_sh")
	.style.color = "#ffffff";	

	document.getElementById("btn_bf")
	.style.color = "#000000";

	bf_graph_max();

}

function active_cd() {

	document.getElementById("bf")
	.setAttribute("fill", "#ffffff");
	document.getElementById("of")
	.setAttribute("fill", "#ffffff");
	document.getElementById("sf")
	.setAttribute("fill", "#ffffff");
	document.getElementById("sh")
	.setAttribute("fill", "#ffffff");

	document.getElementById("cd")
	.setAttribute("fill", "#000000");

	document.getElementById("btn_bf")
	.style.color = "#ffffff";	
	document.getElementById("btn_of")
	.style.color = "#ffffff";	
	document.getElementById("btn_sf")
	.style.color = "#ffffff";	
	document.getElementById("btn_sh")
	.style.color = "#ffffff";		

	document.getElementById("btn_cd")
	.style.color = "#000000";

	cd_graph_max();

}

function active_of() {

	document.getElementById("bf")
	.setAttribute("fill", "#ffffff");
	document.getElementById("cd")
	.setAttribute("fill", "#ffffff");
	document.getElementById("sf")
	.setAttribute("fill", "#ffffff");
	document.getElementById("sh")
	.setAttribute("fill", "#ffffff");

	document.getElementById("of")
	.setAttribute("fill", "#000000");

	document.getElementById("btn_bf")
	.style.color = "#ffffff";	
	document.getElementById("btn_cd")
	.style.color = "#ffffff";	
	document.getElementById("btn_sf")
	.style.color = "#ffffff";	
	document.getElementById("btn_sh")
	.style.color = "#ffffff";		

	document.getElementById("btn_of")
	.style.color = "#000000";

	of_graph_max();

}

function active_sf() {

	document.getElementById("bf")
	.setAttribute("fill", "#ffffff");
	document.getElementById("of")
	.setAttribute("fill", "#ffffff");
	document.getElementById("cd")
	.setAttribute("fill", "#ffffff");
	document.getElementById("sh")
	.setAttribute("fill", "#ffffff");

	document.getElementById("sf")
	.setAttribute("fill", "#000000");

	document.getElementById("btn_bf")
	.style.color = "#ffffff";	
	document.getElementById("btn_of")
	.style.color = "#ffffff";	
	document.getElementById("btn_cd")
	.style.color = "#ffffff";	
	document.getElementById("btn_sh")
	.style.color = "#ffffff";		

	document.getElementById("btn_sf")
	.style.color = "#000000";

	sf_graph_max();

}

function active_sh() {

	document.getElementById("bf")
	.setAttribute("fill", "#ffffff");
	document.getElementById("of")
	.setAttribute("fill", "#ffffff");
	document.getElementById("sf")
	.setAttribute("fill", "#ffffff");
	document.getElementById("cd")
	.setAttribute("fill", "#ffffff");

	document.getElementById("sh")
	.setAttribute("fill", "#000000");

	document.getElementById("btn_bf")
	.style.color = "#ffffff";	
	document.getElementById("btn_of")
	.style.color = "#ffffff";	
	document.getElementById("btn_sf")
	.style.color = "#ffffff";	
	document.getElementById("btn_cd")
	.style.color = "#ffffff";		

	document.getElementById("btn_sh")
	.style.color = "#000000";

	sh_graph_max();

}


//////////////////////////////////////////////////////////

function active_btn_max() {
	document.getElementById("btn_max")
	.style.color = "#000000";

	document.getElementById("btn_min")
	.style.color = "#ffffff";	
	document.getElementById("btn_rain")
	.style.color = "#ffffff";	
	document.getElementById("btn_sun")
	.style.color = "#ffffff";	
}

function active_btn_min() {
	document.getElementById("btn_min")
	.style.color = "#000000";

	document.getElementById("btn_max")
	.style.color = "#ffffff";	
	document.getElementById("btn_rain")
	.style.color = "#ffffff";	
	document.getElementById("btn_sun")
	.style.color = "#ffffff";	
}

function active_btn_rain() {
	document.getElementById("btn_rain")
	.style.color = "#000000";

	document.getElementById("btn_min")
	.style.color = "#ffffff";	
	document.getElementById("btn_max")
	.style.color = "#ffffff";	
	document.getElementById("btn_sun")
	.style.color = "#ffffff";	
}

function active_btn_sun() {
	document.getElementById("btn_sun")
	.style.color = "#000000";

	document.getElementById("btn_min")
	.style.color = "#ffffff";	
	document.getElementById("btn_rain")
	.style.color = "#ffffff";	
	document.getElementById("btn_max")
	.style.color = "#ffffff";	
}

//////////////////////////////////////////////////////

function setcolor() {

	d3.select("#graph").select("svg").remove();

	document.getElementById("cd")
	.setAttribute("fill", "#ffffff");
	document.getElementById("of")
	.setAttribute("fill", "#ffffff");
	document.getElementById("sf")
	.setAttribute("fill", "#ffffff");
	document.getElementById("sh")
	.setAttribute("fill", "#ffffff");
	document.getElementById("bf")
	.setAttribute("fill", "#ffffff");

	document.getElementById("btn_cd")
	.style.color = "#ffffff";	
	document.getElementById("btn_of")
	.style.color = "#ffffff";	
	document.getElementById("btn_sf")
	.style.color = "#ffffff";	
	document.getElementById("btn_sh")
	.style.color = "#ffffff";	
	document.getElementById("btn_bf")
	.style.color = "#ffffff";

document.getElementById("btn_comp")
	.style.color = "#000000";

}

//////////////////////////////////////////////////////

function para() {

	document.getElementById("btn_comp")
	.style.color = "#ffffff";	

	var city1 = document.getElementById("btn_bf");
	var bf_btn = city1.style.color;

	var city2 = document.getElementById("btn_cd");
	var cd_btn = city2.style.color;

	var city3 = document.getElementById("btn_of");
	var of_btn = city3.style.color;

	var city4 = document.getElementById("btn_sf");
	var sf_btn = city4.style.color;

	var city5 = document.getElementById("btn_sh");
	var sh_btn = city5.style.color;

///////////////////////////////////////////////////////

	var color1 = document.getElementById("btn_max");
	var max_temp = color1.style.color;

	var color2 = document.getElementById("btn_min");
	var min_temp = color2.style.color;

	var color3 = document.getElementById("btn_rain");
	var rain_mm = color3.style.color;

	var color4 = document.getElementById("btn_sun");
	var sun_hr = color4.style.color;

//////////////////////////////////////////////////////

	if (bf_btn == "rgb(0, 0, 0)") {

		if (max_temp == "rgb(0, 0, 0)") {
			bf_graph_max();
		}

		if (min_temp == "rgb(0, 0, 0)") {
			bf_graph_min();
		}

		if (rain_mm == "rgb(0, 0, 0)") {
			bf_graph_rain();
		}

		if (sun_hr == "rgb(0, 0, 0)") {
			bf_graph_sun();
		}

	}

/////////////////////////////////////////////////////

	if (cd_btn == "rgb(0, 0, 0)") {

		if (max_temp == "rgb(0, 0, 0)") {
			cd_graph_max();
		}

		if (min_temp == "rgb(0, 0, 0)") {
			cd_graph_min();
		}

		if (rain_mm == "rgb(0, 0, 0)") {
			cd_graph_rain();
		}

		if (sun_hr == "rgb(0, 0, 0)") {
			cd_graph_sun();
		}

	}

/////////////////////////////////////////////////////

	if (of_btn == "rgb(0, 0, 0)") {

		if (max_temp == "rgb(0, 0, 0)") {
			of_graph_max();
		}

		if (min_temp == "rgb(0, 0, 0)") {
			of_graph_min();
		}

		if (rain_mm == "rgb(0, 0, 0)") {
			of_graph_rain();
		}

		if (sun_hr == "rgb(0, 0, 0)") {
			of_graph_sun();
		}

	}

//////////////////////////////////////////////////////

	if (sf_btn == "rgb(0, 0, 0)") {

		if (max_temp == "rgb(0, 0, 0)") {
			sf_graph_max();
		}

		if (min_temp == "rgb(0, 0, 0)") {
			sf_graph_min();
		}

		if (rain_mm == "rgb(0, 0, 0)") {
			sf_graph_rain();
		}

		if (sun_hr == "rgb(0, 0, 0)") {
			sf_graph_sun();
		}

	}

//////////////////////////////////////////////////////

	if (sh_btn == "rgb(0, 0, 0)") {

		if (max_temp == "rgb(0, 0, 0)") {
			sh_graph_max();
		}

		if (min_temp == "rgb(0, 0, 0)") {
			sh_graph_min();
		}

		if (rain_mm == "rgb(0, 0, 0)") {
			sh_graph_rain();
		}

		if (sun_hr == "rgb(0, 0, 0)") {
			sh_graph_sun();
		}

	}	

/////////////////////////////////////////////////////

	document.getElementById("btn_cd")
	.style.backgroundColor = "#d9534f";	
	document.getElementById("btn_of")
	.style.backgroundColor = "#d9534f";	
	document.getElementById("btn_sf")
	.style.backgroundColor = "#d9534f";	
	document.getElementById("btn_sh")
	.style.backgroundColor = "#d9534f";	
	document.getElementById("btn_bf")
	.style.backgroundColor = "#d9534f";

} // End of para();

/////////////////////////////////////////////////////

function compare() {

	document.getElementById("btn_cd")
	.style.backgroundColor = "red";	
	document.getElementById("btn_of")
	.style.backgroundColor = "yellow";	
	document.getElementById("btn_sf")
	.style.backgroundColor = "green";	
	document.getElementById("btn_sh")
	.style.backgroundColor = "purple";	
	document.getElementById("btn_bf")
	.style.backgroundColor = "steelblue";

	var color1 = document.getElementById("btn_max");
	var max_temp = color1.style.color;

	var color2 = document.getElementById("btn_min");
	var min_temp = color2.style.color;

	var color3 = document.getElementById("btn_rain");
	var rain_mm = color3.style.color;

	var color4 = document.getElementById("btn_sun");
	var sun_hr = color4.style.color;

	if (max_temp == "rgb(0, 0, 0)") {
		comp_graph_max();

	}

	if (min_temp == "rgb(0, 0, 0)") {
		comp_graph_min();
	}

	if (rain_mm == "rgb(0, 0, 0)") {
		comp_graph_rain();
	}

	if (sun_hr == "rgb(0, 0, 0)") {
		comp_graph_sun();
	}

}