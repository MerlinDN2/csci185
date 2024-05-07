//adding alerts to the Videogame pages, drawing pages, and to the surf the web page
// as well as adding onclick function in the videogame page, in attempt to
//make the buttons interactive as well

function mouseAlert(){
    alert("Oops I've dropped my pencil...Wait what is that?!!");
}

function negativeMove(){
    document.querySelector("#gameBtn").style.backgroundColor='Red';
    alert("You D I E D.");
}

function positiveMove(){
    document.querySelector("#gameBtn2").style.backgroundColor='Green';
    alert("New Level Unlocked!");
}

function oppsAlert(){
alert("STOP RIGHT THERE BUDDY!!");
}

const audio = new Audio();
audio.src="meow-sound-effect.mp3";











// // creating popups for my pages
// let popup = document.getElementById("popup");

// function popupOn(){
//     popup.classList.add(".popup-on");
// }

// function popupOff(){
//     popup.classList.remove(".popup-on");
// }

