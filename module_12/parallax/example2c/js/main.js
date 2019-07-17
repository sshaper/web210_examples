var scroll = {};

/* ASSIGNS AN EVENT LISTENER TO THE ANCHOR ELEMENTS OF THE NAV*/
scroll.init = function(){
	document.getElementsByTagName('body')[0].addEventListener('click',scroll.getId, false);
}

/* DEPENDING ON THE RELATIONSHIP OF POINTA TO POINTB WE WILL SCROLL UP OR DOWN THE PAGE TO POINT B */
scroll.scroll = function(pointA, pointB, positive){
	/* OUR SPEED HOW MANY PIXELS WILL WE TRAVEL PER INCH */
	var speed = 10;
	/* OUR TIME HOW LONG WE WILL TAKE TO SCROLL THAT DISTANCE */
	var time = .5
	if(positive){
		if(pointA < pointB){
			pointA += speed;
			/* THE WINDOW SCROLLTO METHOD SCROLLS TO A CERTAIN POINT */
			window.scrollTo(0, pointA);
			
			/* TO GET A SMOOTH EFFECT WE SCROLL A LITTLE BIT, PAUSE JUST SLIGHTLY, AND THEN RECALL THE FUNCTION (RECURSIVE) */
			setTimeout(function(){scroll.scroll(pointA, pointB, positive)}, time);
		}
	}
	else {
		if(pointA > pointB){
			pointA -= speed;
			window.scrollTo(0, pointA);
			setTimeout(function(){scroll.scroll(pointA, pointB, positive)}, time);
		}
	}
}


/* WE GET THE ID OF THE ELEMENT SO WE NOW WHAT ELEMENT WE NEED TO MEASURE*/
scroll.getId = function(e){
	if(e.target.nodeName.toLowerCase() === 'a'){
		/* PREVENT THE ANCHOR DEFAULT BEHAVIOR*/
		e.preventDefault();
		var ele = document.getElementById(e.target.href.substring(e.target.href.indexOf('#') + 1));
	
		/* GET THE POINT THE ELEMENT WE ARE AT (POINT A) AND THE ELEMENT WE ARE GOING TO (POINT B)*/
		var pointA = scroll.getOffset(e.target).top;
		var pointB = scroll.getOffset(ele).top;

		/* IF POINTA IS LESS THEN POINTB THEN POINTA IS ABOVE BE AND WE WILL SCROLL DOWN TO A*/
		if(pointA < pointB){
			scroll.scroll(pointA, pointB, true);
		}
		else {
			/* I HAVE TO DO THIS BECAUSE I NEED TO GET THE TOP POSITION OF THE ELEMENT I AM CLICKING IN RELATION TO WHERE IT IS FROM THE VIEWPORT THEN SUBTRACT THAT FROM THE POINTA.  IF THIS IS NOT DONE THE STARTING SCROLLING POINT WILL BE OFF FROM THE ACTUAL LOCATION IN WHICH IT IS CLICKED. */
			ele = e.target.getBoundingClientRect();
			pointA = pointA - ele.top;
			scroll.scroll(pointA, pointB, false);
		}


	}
}


/* GETS THE LOCATON OF THE IN PIXELS OF WHERE THE PASSED OBJECT (EL) IS LOCATED */
scroll.getOffset = function(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY
  }
}

scroll.init();