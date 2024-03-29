function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    // fill("teal")
    // circle(550, 100, 100);

    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    rect(30, 20, 55, 55);

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    strokeWeight(20);
    point(110, 20);

    https://p5js.org/reference/#/p5/text
    fill('black')
    text("Here is some text", 200, 40);

    https://p5js.org/reference/#/p5/ellipse
    fill('red');
    ellipse(100, 200, 60, 100);


/** My Attempt **/
    fill('orange');
    circle(500,300,300);
    
    fill('black');
    circle(500,300,100);

    fill('orange');
    circle(900,300,300);

    fill('black');
    circle(900,300,100);

    fill('red');
    circle(700,500,100);

    fill('black');
    rect(500,100,20);
    
    fill('black');
    rect(900,100,20);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}