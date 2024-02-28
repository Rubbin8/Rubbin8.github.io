/*const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


function rolld20(var x, var y)
{
		ctx.fillStyle = "#9900FF";
		ctx.fillRect(0, 0, 150, 75);

}*/

var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = 200;


var mouseX = 0;
var mouseY = 0;
var states = [
"Washington",
"Oregon",
"California",
"Idaho",
"Nevada",
"Utah",
"Arizona",
"Montana",
"Wyoming",
"Colorado",
"New Mexico",
"North Dakota",
"South Dakota",
"Nebraska",
"Kansas",
"Oklahoma",
"Texas",
"Minnesota",
"Iowa",
"Missouri",
"Arkansas",
"Louisiana",
"Wisconsin",
"Michigan",
"Illinois",
"Kentucky",
"Tennessee",
"Mississippi",
"Alabama",
"Ohio",
"West Virginia",
"Virginia",
"North Carolina",
"South Cariolina",
"Georgia",
"Florida",
"Maine",
"New Hampshire",
"Vermont",
"Massachusetts",
"Connecticut",
"Rhode Island",
"New York",
"New Jersey",
"Pennsylvania",
"Delaware",
"Maryland",
"Alaska",
"Hawaii"
];


canvas.addEventListener("mousemove", moveMouse);
function moveMouse(event)
{
	mouseX = event.x - 5;
	mouseY = event.y - 420;
	
}


function mouseclick(event)
{

	"use Strict";
	W = canvas.width;
	H = canvas.height;
	 c.beginPath();
           c.fillStyle = "#9900FF";
            c.lineWidth = 2;
            c.strokeStyle = "#CC22FF";
			c.moveTo(mouseX, mouseY);
			c.lineTo(mouseX + 10, mouseY + 10);
			c.lineTo(mouseX, mouseY + 20);
			c.lineTo(mouseX - 10, mouseY + 10);
			c.lineTo(mouseX, mouseY);
			//c.lineTo(W/2, H/2);
			c.closePath();
			c.fill();
            c.stroke();
}
canvas.addEventListener("click", mouseclick, false);



document.write("<br><p>The 50 states:</p><br>" + states[0]);
for(var i = 1; i < states.length; i++)
{
	document.write(", " + states[i]);
}

states.sort();
document.write("<br><br>Sorted alphabetically:<br><br>");


document.write(states[0]);
for(var i = 1; i < states.length; i++)
{
	document.write(", " + states[i]);
}
document.write("<br><br>Press S to search through the array, or press F to filter things out.");
document.addEventListener("keypress", checkKey);
function checkKey(event)
{
	if(event.keyCode == 115)
	{
		var query = prompt("Search for states that contain certain letters or strings of letters");
		if(query != null)
		{
			var newstates = [];
			var n = 0;
			for(var i = 0; i < states.length; i++)
			{
				if(states[i].toLowerCase().includes(query.toLowerCase()))
				{
					newstates[n] = states[i];
					n++;
				}
			}
		}
		if(newstates.length > 0)
		{
			document.write("States that contain " + query + ": <br>" + newstates[0]);
			for(var i = 1; i < newstates.length; i++)
			{	
				document.write(", " + newstates[i]);
			}
		}
		else{
			document.write("No states could be found that contain " + query + ":");
		}
		document.write("<br><br>Press F5 to return");
	}
	else if(event.keyCode == 102)
	{
		var query = prompt("Filter out states that contain certain letters or strings of letters");
		if(query != null)
		{
			var newstates = [];
			var n = 0;
			for(var i = 0; i < states.length; i++)
			{
				if(!(states[i].toLowerCase().includes(query.toLowerCase())))
				{
					newstates[n] = states[i];
					n++;
				}
			}
		}
		if(newstates.length > 0)
		{
			document.write("States that do not contain " + query + ": <br>" + newstates[0]);
			for(var i = 1; i < newstates.length; i++)
			{	
				document.write(", " + newstates[i]);
			}
		}
		else{
			document.write("Somehow not a single state contained your query. This shouldn't be possible.");
		}
		document.write("<br><br>Press F5 to return");
	}
	else{
		document.write(event.keyCode);
	}
}


	
/*function update()
{
	
	nextframe();
}
function nextframe()
{
	update();
}*/