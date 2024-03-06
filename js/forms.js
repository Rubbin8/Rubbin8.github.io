

function validateForm() {
  let x = document.forms["signup"]["name"].value;
  let y = document.forms["signup"]["email"].value;
  if (x == "") {
    alert("Please provide a name");
    return false;
  }
  else if (y == "") {
    alert("Please provide an email address");
    return false;
  }
  else{
	
	document.write("thank you, " + x + ", for pretending to sign up for the Redbird Gaming Club!<br>Please do NOT expect an email at " + y + " because that was not an actual sign up sheet.");
	document.write("<br>You will be returned to the previous page in ten seconds");
	setTimeout(refpage, 10000);
  }
}

function refpage()
{
	window.location.reload(true);
}