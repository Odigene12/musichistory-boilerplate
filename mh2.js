"use script";

let beginInput = document.getElementById("AddMusicView");
	beginInput.classList.add("hidden"); 


let viewSwitch = document.getElementById("add");



function musicGone(){
	let myMusic= document.getElementById("ListMusicView");
myMusic.classList.add("hidden");
beginInput.classList.remove("hidden");
};

function addMusic(){
	viewSwitch.addEventListener("click", musicGone);
	 
};

function addGone(){
document.getElementById("ListMusicView").classList.remove("hidden");
document.getElementById("AddMusicView").classList.add("hidden");
}

document.getElementById("add").onclick = function() {
    musicGone();
    return false;
};

document.getElementById("list").onclick = function() {
    addGone();
    return false;
};

