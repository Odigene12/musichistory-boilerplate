"use script"

let songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// adding a song to beginning of array
songs.unshift("Crazy by Javier")

// adding a song to end of array
songs.push("Without You by Usher")

// loop over array and remove any words or characters that obviously don't belong
function songCycle(){
	for (let i = 0; i < songs.length; i++) {
		songs[i] = songs[i].replace("*","");
		songs[i] = songs[i].replace(">", "-");
		songs[i] = songs[i].replace("@", "");
		songs[i] = songs[i].replace("(", "");
		songs[i] = songs[i].replace("!", "");
	}
	songPlace()
 };
 

function songPlace(){
 	let songtoDom = document.getElementById("Names");
 	for(i =0; i < songs.length; i++){
 		songtoDom.innerHTML += `<p>${songs[i]}</p>`;
 	}
 };

 songCycle()