var inputBox = document.getElementById('input-box')
var btn = document.getElementById('submit-input-box')

function loop() {
	for (var i=1; i<5; i++) {
  alert(document.getElementById(String(i)).innerHTML)
  if(document.getElementById(String(i)).innerHTML == "") {
  	document.getElementById(String(i)).innerHTML = "next"
    break;
  
 		 }
  	}
  }
