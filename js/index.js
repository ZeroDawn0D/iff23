

changeMenu = function(){
	console.log("working")
	dropdown = document.getElementsByClassName("drop-down")[0];
	if(dropdown.style.maxHeight === "0px"){
		dropdown.style.maxHeight ="500px"
	}
	else{
		dropdown.style.maxHeight ="0px"	
	}
}

dropdownButton = document.getElementsByClassName("mobile")[0];
dropdown = document.getElementsByClassName("drop-down")[0];
dropdown.style.maxHeight = "0px"
dropdownButton.onclick = changeMenu