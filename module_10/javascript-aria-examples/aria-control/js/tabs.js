/*get all the tab containers*/
var tabsUl = document.getElementById('tabs');

/*get all the tabs (li)*/
var tabs =  tabsUl.getElementsByTagName('li');
var panelContainer = document.getElementById('panels');
var panels = panelContainer.getElementsByTagName('div');

/*set onclick event to tabs*/
tabsUl.onclick = selectTab;


function selectTab(e){
	/*clear all the anchor elements*/
	if (e.target.nodeName.toLowerCase() === 'a'){
		var i = 0;
		while (i < tabs.length){
			tabs[i].className = '';
			tabs[i].firstElementChild.setAttribute('aria-selected','false');
			i++;
		}
		i=0
		/*clear all the panels*/
		while(i < panels.length){
			panels[i].setAttribute('aria-hidden','true');
			panels[i].setAttribute('aria-expanded','false');
			panels[i].style.display = "none";
			i++;
		}

		/*once I clear all my anchors and panels I add selected styles and attributes to the target element.*/
		e.target.parentNode.className = 'whiteBorder';
		e.target.setAttribute('aria-selected','true');
		var panel = document.getElementById(e.target.getAttribute('aria-controls'));
		panel.setAttribute('aria-hidden','false');
		panel.setAttribute('aria-expanded','true');
		panel.style.display = 'block';
		panel.getElementsByTagName('h2')[0].focus();
	}
}
