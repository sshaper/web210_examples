// set up variables
var stars = document.getElementById('stars');
var rate = 0;
var ariaValue = 0;

// add event. I used onkeyup to keep it from repeating.
document.getElementById('stars').onkeyup = rateIt;

function rateIt(e){
	//if the up arrow key is the one that was pressed

	if (e.keyCode === 38){
		/*if the rate number is greater than -190 and less than or equal to 0
		then decrease the rate number by 38 and increase the ariaValue by 1.
		the rate adjusts the background image position so the appropriate stars
		show up.*/
		if (rate > -190 && rate <= 0){
			rate += -38;
			ariaValue++;
			changeAria(ariaValue);
			stars.style.backgroundPosition = "0 "+rate+"px";
		}
		
	}
	else if(e.keyCode === 40){
		/*if the rate number is greater than or equal to -190 and less than 0
		then increase the rate number by 38 and decrease the ariaValue by 1.
		the rate adjusts the background image position so the appropriate stars
		show up.*/
		if (rate >= -190 && rate < 0){
			rate += 38;
			ariaValue--;
			changeAria(ariaValue);
			stars.style.backgroundPosition = "0 "+rate+"px";
			
		}
	}
}

//This function changes the aria-valuenow and aria-valuetext and updates the text
function changeAria(value){
	stars.setAttribute('aria-valuenow',value);
	stars.setAttribute('aria-valuetext',value+" stars");
	stars.innerHTML = value+" stars";
}