// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'Hello';
const nouns = ["Computer", "Book", "Bird", "Dog", "Car"];

const verbs = ["Read", "jumps", "flies", "sings", "Clean"];
const adjectives = ["Apple", "Orange", "Mango", "Pizza", "Burger"];
const another = ["lion", "beach", "forest", "city", "Table"];
const place = ["20", "30", "40", "50", "60"];


var nounbutton = document.getElementById('nounbutton');
var verbbutton = document.getElementById('verbbutton');
var adjbutton = document.getElementById('adjbutton');
var anothernoun = document.getElementById('anothernoun');
var placenumber = document.getElementById('placenumber');

/* Functions
-------------------------------------------------- */
function speakNow(array) {
	// Create a new speech object, attaching the string of text to speak
	var randomIndex = Math.floor(Math.random() * array.length);
	// Select the random element from the array
	var randomElement = array[randomIndex];
	var utterThis = new SpeechSynthesisUtterance(randomElement);
	// Actually speak the text
	synth.speak(utterThis);
}


/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
nounbutton.onclick = function() {
	speakNow(nouns);
}
verbbutton.onclick = function() {
	speakNow(verbs);
}
adjbutton.onclick = function() {
	speakNow(adjectives);
}
anothernoun.onclick = function() {
	speakNow(another);
}
placenumber.onclick = function() {
	speakNow(place);
}
