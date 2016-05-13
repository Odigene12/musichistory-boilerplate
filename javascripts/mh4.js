"use strict";

var music = [];
var music2 = [];
var musicList = document.getElementById("songList");

function loadMusic (callback) {
	let loader = new XMLHttpRequest();
	loader.open("GET", "music.json");
	loader.send();
	loader.addEventListener("load", function () {

		// set value of the music to private array
		music = JSON.parse(this.responseText).music;

		callback(music);
	});
}

function showMusic(music) {
	let outputString = "";
	for (let i = 0; i < music.length; i++) {
		let currentSong = music[i];
		outputString = `<div id = "container"${i}><h4>${currentSong.Name}</h4><h4>by ${currentSong.Artist}</h4><h4>Album: ${currentSong.Album}</h4><div><input type = "button" class = "delete" value = "Delete"></div></div>`;
		musicList.innerHTML += outputString;

		console.log("the music list", musicList );
	}
	deleteListener()
	
}

// This is the function that deletes the specific song whose "delete" button is clicked.
	let  deleteListener = function() {
	var deleteBtn = document.getElementsByClassName("delete");
	for (var i = 0; i < deleteBtn.length; i++) { 
	deleteBtn[i].addEventListener("click", deleteSong);
	}
}

let deleteSong = function () {
// target the container of the delete button that is clicked and clear it out
let thisSong = event.target.parentElement.parentElement
thisSong.remove()
}

function loadMore () {
	let loader = new XMLHttpRequest();
	loader.open("GET", "music2.json");
	loader.send();
	loader.addEventListener("load", function () {

		// set value of the music to private array
		music2 = JSON.parse(this.responseText).music2;

		moreMusic(music2)

	});
	
}


	let getMoreBtnClass = document.getElementById("more");
	getMoreBtnClass.addEventListener("click", loadMore)

	function moreMusic (music2) {
		console.log("click event for more music", event);
		let outputString = "";	
	for (let i = 0; i < music2.length; i++) {
		let currentSong = music2[i];
		outputString = `<div id = "container"${i}><h4>${currentSong.Name}</h4><h4>by ${currentSong.Artist}</h4><h4>Album: ${currentSong.Album}</h4><div><input type = "button" class = "delete" value = "Delete"></div></div>`;
		musicList.innerHTML += outputString;
	}
	deleteListener()
	
	}
	


loadMusic(showMusic);
