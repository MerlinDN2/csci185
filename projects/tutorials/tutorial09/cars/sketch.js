const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 0,
    y: 400,
    width: 100,
    speed: 5,
    color: 'purple'
};
const c2 = {
    x: 0,
    y: 300,
    width: 60,
    speed: -10,
    color: 'green'
};

const c3 ={
    x: 100,
    y: 600,
    width: 500,
    speed: 10,
    color: 'blue'
};


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    if (c1.x > canvasWidth + 400) {
        c1.x = -400;
    }
    if (c2.x < -200) {
        c2.x = canvasWidth + 200;
    }
    if (c3.x > canvasWidth + 200) {
        c3.x = -200;
    }

    c1.x += c1.speed;
    c2.x += c2.speed;
    c3.x += c3.speed;

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);    
    drawCar(c2.x, c2.y, c2.width, c2.color);  
    drawCar(c3.x, c3.y, c3.width, c3.color);
}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
