// TitaNets Star Wars Music Tones for Flipper Zero

let submenu = require("submenu");
let dialog = require("dialog");
let notify = require("notification");
let Speaker = load("/ext/apps/Scripts/Libs/speaker_api.js");

function showAboutMessage() {
	notify.error();
    dialog.custom({
        header: "TitaNets",
        text: "Visit titanets.com\nfor more solutions.",
        button_center: "Ok",
        auto_close: false
    });
}
function playNotes(notes) {
    // Play each note in sequence with adjusted timing
    for (let i = 0; i < notes.length; i++) {
        let note = notes[i];
        Speaker.play(note.frequency, 1.0, note.duration);
        delay(note.duration > 0 ? note.duration - 150 : 50); // Adjust delay between notes
    }
}
function clearScreen() {
    // Print several new lines to effectively "clear" the console
    for (let i = 0; i < 20; i++) {
        print("\n");
    }
}

function mainMenu() {
	let menuItems = ["Intro", "Imperial March", "R2-D2"];
	
	while (true) {
        submenu.setHeader("Themes:");
		for (let ix = 0; ix < menuItems.length; ix++) {
			submenu.addItem(menuItems[ix], ix);
		}

        let selectedId = submenu.show();
		
        if (selectedId === undefined) {
            break; // Exit the loop if the back button is pressed
        } else {
			let notes = [];
			let selectedText = menuItems[selectedId];
			
			clearScreen();
			print("Playing " + selectedText + "...")
						
			// Define the notes and their durations with adjusted timings
			if (selectedId === 0) {
				notes = [
					{ frequency: 262, duration: 400 },  // C4
					{ frequency: 392, duration: 400 },  // G4
					{ frequency: 349, duration: 167 },   // F4
					{ frequency: 330, duration: 167 },   // E4
					{ frequency: 294, duration: 167 },   // D4
					{ frequency: 523, duration: 400 },  // C5
					{ frequency: 392, duration: 500 },   // G4
					{ frequency: 349, duration: 167 },   // F4
					{ frequency: 330, duration: 167 },   // E4
					{ frequency: 294, duration: 167 },   // D4
					{ frequency: 523, duration: 400 },  // C5
					{ frequency: 392, duration: 400 },   // G4
					{ frequency: 349, duration: 167 },   // F4
					{ frequency: 330, duration: 167 },   // E4
					{ frequency: 349, duration: 167 },   // F4
					{ frequency: 294, duration: 1000 }   // D4
				];	
			} else if (selectedId === 1) {
				notes = [
					{ frequency: 440, duration: 400 },  // A4
					{ frequency: 440, duration: 400 },  // A4
					{ frequency: 440, duration: 400 },  // A4
					{ frequency: 349, duration: 250 },  // F4
					{ frequency: 523, duration: 180 },  // C5
					{ frequency: 440, duration: 400 },  // A4
					{ frequency: 349, duration: 250 },  // F4
					{ frequency: 523, duration: 180 },  // C5
					{ frequency: 440, duration: 700 },  // A4
					{ frequency: 659, duration: 400 },  // E5
					{ frequency: 659, duration: 400 },  // E5
					{ frequency: 659, duration: 400 },  // E5
					{ frequency: 698, duration: 250 },  // F5
					{ frequency: 523, duration: 180 },  // C5
					{ frequency: 415, duration: 400 },  // G#4
					{ frequency: 349, duration: 250 },  // F4
					{ frequency: 523, duration: 180 },  // C5
					{ frequency: 440, duration: 800 }   // A4
				];
			} else if (selectedId === 2) {
				notes = [
					{ frequency: 900, duration: 70 },   // High chirp
					{ frequency: 1300, duration: 70 },  // Higher chirp
					{ frequency: 1100, duration: 90 },  // Mid chirp
					{ frequency: 800, duration: 90 },   // Lower chirp
					{ frequency: 1200, duration: 70 },  // High chirp
					{ frequency: 1500, duration: 70 },  // Very high chirp
					{ frequency: 1000, duration: 130 }, // Longer tone
					{ frequency: 800, duration: 140 },  // Lower tone
					{ frequency: 1200, duration: 70 },  // High chirp
					{ frequency: 900, duration: 70 },   // Mid chirp
					{ frequency: 1100, duration: 90 },  // Higher chirp
					{ frequency: 1000, duration: 90 }   // Mid chirp
				];
			}
			
			if(notes !== []) { playNotes(notes); }
        }
    }
}


mainMenu();
showAboutMessage();
clearScreen();
print("Press back to exit.");