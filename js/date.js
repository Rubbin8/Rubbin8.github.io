/*const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


function rolld20(var x, var y)
{
		ctx.fillStyle = "#9900FF";
		ctx.fillRect(0, 0, 150, 75);

}*/

document.write('<h3>Greetings, traveler!</h3>');
var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var mouseX = 0;
var mouseY = 0;


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
