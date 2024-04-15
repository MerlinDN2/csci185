const photos = [
    "images/img1-600x400.jpg", // 0
    "images/img2-600x400.jpg", // 1
    "images/img3-600x400.jpg", // 2
    "images/img4-600x400.jpg", // 3
    "images/img5-600x400.jpg", // 4
    "images/img6-600x400.jpg", // 5
    "images/img7-600x400.jpg", // 6
    "images/img8-600x400.jpg", // 7
    "images/img9-600x400.jpg", // 8
    "images/img10-600x400.jpg" // 9
];
let idx = 0;


/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    console.log("Show Image:", idx);
    // target the selector #the_image
    //change the img src to photos[idx]
    // also target the caption and change it too!
    const img = document.querySelector("#the_image"); //const is a "bucket"
    img.src = photos[idx]; //{} what goes in the body of a function, []something about an array, ()what needs to go into that funcion
    // const p = document.querySelector(".caption");
}


/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    idx += 1;
    showImage();
}

/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    idx -= 1;
    showImage();
}
