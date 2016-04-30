"use strict"

// Create a function that listens for the click of the "add" button on the DOM and collects all the values from the input fields in the "Add Music" view and adds all the songs to my current array of songs then updates the song list on the DOM.

var addButton = document.getElementById("addBtn");
let inputSong = document.getElementById("song");
let inputArtist = document.getElementById("artist");
let inputAlbum = document.getElementById("album");

let userSong = inputSong.value; 
let userArtist = inputArtist.value; 
let userAlbum = inputAlbum. value;






// listens for a click on the "add button" on the DOM from the "Add Music" view
addButton.addEventListener("click", function addMusic() {	
	console.log(event);	
	// collects all the values from the input fields in the add music view
let newMusic = inputSong.value + " by " + inputArtist.value + " on the album " + inputAlbum.value;

	// adds the new song created by the user from the input fields to the new array and updates the song list on the DOM.
	songs.unshift(newMusic);
	clearInputs();
	newSong();
})

function clearInputs () {
	inputSong.value= "";
	inputArtist.value= "";
	inputAlbum.value= "";
	console.log("new list of songs", songs );
}

function newSong() {
let songtoDom = document.getElementById("Names");
 songtoDom.innerHTML += `<p>${songs[0]}</p>`;
}