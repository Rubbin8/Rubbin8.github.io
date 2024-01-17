var today = new Date();
if(today.getYear() < 2025)// && today.getMonth() < 2 && today.getDate() < 19)
{
	if(today.getMonth() < 1)
	{
		if(today.getDate() < 19)
		{
			document.write('<p>The next meeting is on January 19th at 4PM, don\'t miss it!</p>');
		}
	}
	else{
	document.write('<p>It\'s too late for the meeting on January 19, 2024. Better luck next time!</p>');	
	}
}
else{
	document.write('<p>It\'s too late for the meeting on January 19, 2024. Better luck next time!</p>');	
}
