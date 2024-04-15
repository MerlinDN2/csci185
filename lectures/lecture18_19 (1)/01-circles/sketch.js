function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    //call the circle function
    // how many times: 5
    // What do we change each time? y by 50

    let counter = 0;
    let y = 200;
    while (counter < 5) {
        circle(100, y, 50);
        y += 5;


        counter += 1; //dont forget to increment the counter
    }

    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
