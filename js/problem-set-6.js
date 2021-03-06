/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
let p = document.getElementById("canvas1");
let ctx = p.getContext("2d");
ctx.font = "48px Arial";
ctx.clearRect(0, 0, p.width, p.height);
ctx.strokeText("Hello, World", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let p = document.getElementById("canvas2");
  let ctx = p.getContext("2d");
  let height = prompt("Please enter your rectangle's height.");
  let width = prompt("Please enter your rectangle's width.");
  let x = prompt("Please enter your rectangle's x coordinate.");
  let y = prompt("Please enter your rectangle's y coordinate.");

height = Number(height);
width = Number(width);
x = Number(x);
y = Number(y);

if (height == false || width == false || x < 5 || y < 5){
  if (height == false){
    alert('height too small.');
  }
  if (width == false){
    alert('width too small.');
  }
  if (x < 5){
    alert("X value too small.  Must be greater than or equal to 5.");
  }
  if (y < 5){
    alert("Y value too small.  Must be greater than or equal to 5.");
  }
} else if (height > p.height || width > p.width || (height + y) > p.height || (width + x) > p.width){
    alert("Your inputs extend outside the canvas size.");
} else {
ctx.clearRect(0, 0, p.width, p.height);
ctx.strokeRect(x, y, width, height);
}
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
let p = document.getElementById("canvas3");
let color = prompt("Please enter a color")
let ctx = p.getContext("2d");
String(color);
ctx.clearRect(0,0,ctx.width,ctx.height);
if (color === "black" || color === "blue" || color === "green" || color === "orange" || color === "purple" || color === "red" || color === "yellow") {
  ctx.rect(10, 10, 100, 50);
  ctx.fillStyle = color;
  ctx.fill();

} else {
    alert("Invalid Color");
  }
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
let p = document.getElementById("canvas4");
let side1 = Number(prompt("Side 1:"));
let side2 = Number(prompt("Side 2:"));
let side3 = Number(prompt("Side 3:"));
let ctx = p.getContext("2d");
  if (side1 == Math.abs(side1) && side2 == Math.abs(side2) && side3 == Math.abs(side3)){

    if (side1**2 + side2**2 == side3**2 && side1 != 0 && side2 != 0 && side3 != 0) {
      ctx.clearRect(0,0,p.width,p.height);
      ctx.beginPath();
      ctx.moveTo(10 , 10);
      ctx.lineTo(10, 10 + side1);
      ctx.lineTo(10 + side2, 10 + side1);
      ctx.lineTo(10, 10);
      ctx.stroke();
      if (p.height - 10 - side1 < 0 || p.width - 10 - side2 < 0) {
        alert("Your triangle will exceed the canvas size.")
        ctx.clearRect(0,0,p.width,p.height);
      }
    } else {
      alert("One of your inputs is invalid");
    }
  } else {
    alert("One of your inputs is invalid");
  }
// if (height > p.height || width > p.width || (height + y) > p.height || (width + x) > p.width){
//     alert("Your inputs extend outside the canvas size.");
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
let p = document.getElementById("canvas5");
let ctx = p.getContext("2d");
let rad = Number(prompt("Enter your circle's radius"));
  if(rad > 0 &&  rad < 250){

    let smile = rad * .7;
    let eye = rad * .1;
    //circle
    ctx.clearRect(0,0,p.width,p.height);
    ctx.beginPath();
    ctx.arc(rad + 5, rad + 5, rad, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(rad + 5  - rad/2, rad + 5 - rad/3, eye, 0, Math.PI*2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(rad + 5 + rad/2, rad + 5 - rad/3, eye, 0, Math.PI*2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(rad + 5 , rad + 5, smile, 0, Math.PI);
    ctx.stroke();
} else {
    alert("Your smiley face does not fit on the canvas.");
}
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let p = document.getElementById("canvas6")
  let ctx = p.getContext("2d");
   ctx.clearRect(0,0,1024,760);

   let radOut;
   let radIn;
   do {
     radOut = Number(prompt("Please enter your Outer Radius"));
   } while (isNaN(radOut));
   do {
     radIn = Number(prompt("Please enter your Inner Radius"));
   } while (isNaN(radIn));

   let deg = 0;

   if (radIn > radOut){
     alert("Your outer radius must be larger than your inner radius");
   } else if (radOut<2){
     alert("Your outer radius is too small");
   } else if (radIn<1){
     alert("Your inner radius is too small");
   } else {
     //draw the star
     ctx.beginPath();
     ctx.moveTo(125,125-radOut);
     for (let i=0; i<=5; i++){
       ctx.lineTo(125+Math.round((Math.cos(Math.PI*(deg-90)/180)*radOut)), 125+Math.round((Math.sin(Math.PI*(deg-90)/180)*radOut)));
       deg +=36;
       ctx.lineTo(125+Math.round((Math.cos(Math.PI*(deg-90)/180)*radIn)), 125+Math.round((Math.sin(Math.PI*(deg-90)/180)*radIn)));
       deg +=36;
     }
     ctx.stroke();
     ctx.closePath();
   }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let p = document.getElementById('canvas7')
  let ctx = p.getContext('2d');
  let side = 80;
  let center = Number((80/Math.sqrt(2)).toFixed(0));
  let x = 70;
  let y = 10;
    //shape
    ctx.clearRect(0, 0, p.width, p.height);
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+side,y);
    ctx.lineTo(x+side+center,y+center);
    ctx.lineTo(x+side+center,y+side+center);
    ctx.lineTo(x+side,y+side+center+center);
    ctx.lineTo(x,y+side+center+center);
    ctx.lineTo(x-center,y+side+center);
    ctx.lineTo(x-center,y+center);
    ctx.lineTo(x,y);
    ctx.fillStyle="red";
    ctx.fill();
    //text
    ctx.beginPath();
    ctx.font="65px Arial";
    ctx.fillStyle="white";
    ctx.fillText("STOP", 20, 130)
    ctx.closePath()
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let p = document.getElementById('canvas8');
  let ctx = p.getContext('2d');
  ctx.clearRect(0, 0, p.width, p.height);
  let length=Number(prompt("Please enter a side length"));
   if (length < 101 && length > 0) {
     let x = 10;
     let y = p.height-10;
     let i = 0;
     line = 1;
      while(i < 5){
        for(let j = 0+line;j <= 5; j++){
          ctx.strokeRect(x, y - length, length, length);
          x += length;
        }
        x = 10 + (length / 2) * line;
        y -= length;
        line++;
        i++;
      }
    } else {
      alert("The pyramid will not fit the canvas");
      }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let p = document.getElementById('canvas9');
  let ctx = p.getContext('2d');
  ctx.clearRect(0, 0, p.width, p.height);
  let house = String(prompt("Please enter a color for the house"));
  let door = String(prompt("Please enter a color for the door"));
  if ((house == "blue" || house == "brown"|| house == "green" || house == "orange" || house == "purple" || house == "red" || house == "yellow")
  && (door == "blue" || door == "brown"|| door == "green" || door == "orange" || door == "purple" || door == "red" || door == "yellow")){
    ctx.lineWidth = 1;
    //frame
    ctx.beginPath();
    ctx.rect(150, 250 ,700,500);
    ctx.fillStyle = house;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();

    //roof
    ctx.beginPath();
    ctx.moveTo(150,250);
    ctx.lineTo(500,50);
    ctx.lineTo(850,250);
    ctx.lineTo(150,250);
    ctx.fillStyle = "gray";
    ctx.stroke();
    ctx.fill();

    //window1
    ctx.beginPath();
    ctx.rect(260, 320 ,100,100);
    ctx.fillStyle = "lightBlue";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    //window2
    ctx.beginPath();
    ctx.rect(260, 580 ,100,100);
    ctx.fillStyle = "lightBlue";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    //window3
    ctx.beginPath();
    ctx.rect(640, 320 ,100,100);
    ctx.fillStyle = "lightBlue";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    //window4
    ctx.beginPath();
    ctx.rect(640, 580 ,100,100);
    ctx.fillStyle = "lightBlue";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();

    //door
    ctx.beginPath();
    ctx.rect(450,550, 100, 200);
    ctx.fillStyle = door;
    ctx.stroke();
    ctx.fill();

    //knob
    ctx.beginPath();
    ctx.arc(530, 650, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.stroke();
    ctx.fill();
  } else {
    alert("Input not a supported color.");
  }

}
