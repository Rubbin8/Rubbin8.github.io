var today = new Date();
var msg = 'hello';
var hour = today.getHours();
var output = 0;
var i = 0;
document .write( ' <h3>the current hour is ' + hour + '</h3> ');
if(hour < 11)
{
	output = 1;
	document .write( ' <h3>The hour is less than 11, which means we have to multiply it by itself 11 times. Why, you ask? Because it\'s fun!!</h3> <br>');
	while(i < 11)
	{
		output = output * (output);
		i++;
	}
}
else{
	document .write( ' <h3>The hour is greater than 11, which means we have to add the hour to itself 17 times. Don\'t ask why. We just have to do this.</h3>');
	while(i < 17)
	{
		output = output + hour;
		i++;
	}
}
document .write( ' <h3>Now we have ' + output + '. </ h3> <br>');
if(hour % 2 == 1)
{
	document.write('<h3>this number is odd, so now we\'re gonna multiply it by 2 a number of times equal to the original hour.</h3>');
	var temp = hour;
	for(n = 0; n < temp; n++)
	{
		output = output * 2;
	}
}
else{
	document.write('<h3>This number is even, so we\re gonna divide it by two to see if that makes it odd.</h3>');
	output = output / 2;
}

document .write( ' <h3>After a series of arbitrary calculations, the hour turned into ' + output + '. This is time travel.</ h3> ');