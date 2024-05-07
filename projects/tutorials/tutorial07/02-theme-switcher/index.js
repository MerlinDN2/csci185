const bodyEl = document.querySelector("body");
// function defaultTheme() {
//     // your code here.
//     const bodyEl =document.querySelector("body");
//     bodyEl.className ="default";
// }

// function oceanTheme() {
//    // target the body tag and change its class to ocean //
//    const bodyEl = document.querySelector("body");
//     bodyEl.className = "ocean";
// }

// function desertTheme() {
//    // your code here.
//    const bodyEl= document.querySelector("body");
//    bodyEl.className = "desert";
// }

// function highContrastTheme() {
//     // your code here.
//     const bodyEl= document.querySelector("body");
//     bodyEl.className = "high-contrast";
// }

function changeTheme(myClass){
    bodyEl.className = myClass;
}

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/