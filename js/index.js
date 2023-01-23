

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



changeTeamDropdown = function(){
	parent = this.parentElement;
	dropdownText = parent.getElementsByClassName("drop-down")[0];
	
	if(dropdownText.style.maxHeight == "200px"){
		dropdownText.style.maxHeight = "0px"
	}else{
		dropdownText.style.maxHeight = "200px"
	}
	
}


team = document.getElementById("team")

teamDropdowns = team.getElementsByClassName("drop-down")
for(i = 0; i < teamDropdowns.length; i++){
	teamDropdowns[i].style.maxHeight = "0px"
}

teamDropdownButtons = team.getElementsByClassName("drop-down-button")

for(i = 0; i < teamDropdownButtons.length; i++){
	teamDropdownButtons[i].onclick = changeTeamDropdown
}