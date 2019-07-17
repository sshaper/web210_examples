//set up variables
var tb = document.getElementById('toggle-button');
tb.style.cursor = "pointer";
var toggle = 0;

//click event
tb.onclick = toggleEvent;
console.log(tb);
function toggleEvent(){
	if (toggle === 0){
		tb.innerHTML = "PRESSED";
		tb.style.color = "red";
		tb.setAttribute('aria-pressed', 'true');
		toggle = 1;
	}
	else{
		tb.innerHTML = "NOT PRESSED";
		tb.style.color = "blue";
		tb.setAttribute('aria-pressed', 'false');
		toggle = 0;
	}
}