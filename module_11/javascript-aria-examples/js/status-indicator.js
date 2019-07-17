//set up events
var btn = document.getElementById('status-button').onclick = calculate;

//set up variables
var stat = document.getElementById('status');

function calculate(){
	//when button is pressed display this message for 3 seconds then
	//display the "Finished" message.
	stat.innerHTML = "Calculating Please Wait";
	setTimeout(function(){
		stat.innerHTML = "Finished"
	}, 3000);
}