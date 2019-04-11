//I set up my events
document.getElementById('openDiag').onclick = openDiag;
document.getElementById('okbtn').onclick = closeDiag;
document.getElementById('cancelbtn').onclick = closeDiag;

//I set up my properties
var okbtn = document.getElementById('okbtn');
var diag = document.getElementById('dialogbox');
var dialogOpen = false;

//gets the first paragraph element in the dialog box.
var diagText = diag.getElementsByTagName('p')[0];

//set the dialog box display to none;
diag.style.display = 'none';

//add an event listener to the focus. Had to use addEventListener as there is 
//no DOM 0 event for focus
document.addEventListener("focus", function(event) {
    //if the dialog box is open and it does not contain the event target
    //then set focus back on the dialog box.
    if (dialogOpen && !diag.contains(event.target)) {
        event.stopPropagation();
        diagText.focus();
    }
}, true);

function openDiag(){
	//display the dialog box and set focus to the paragraph text
	dialogOpen = true;
	diag.style.display = 'block';
	diagText.focus();
}

//close the dialog box and set focus back on button.
function closeDiag(){
	diag.style.display = 'none';
	document.getElementById('openDiag').focus();
}