/*
     Name: Richard Mipana
     Date: Sep. 28 - Oct. 9
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/
window.onload = function(){

//Modernizr
if(Modernizr.canvas){
	console.log("Canvas is supported!");
}else{
	console.log("Canvas is not supported");
}

//Draw Rectangle here


	var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext){
		var ctx1 = theCanvas.getContext("2d");
		if(ctx1){

			ctx1.strokeStyle = 'black'
			ctx1.fillStyle = 'rgba(59, 133, 219, 0.8)';
			ctx1.lineWidth = 5;

			ctx1.fillRect(0, 0, 50, 100);
			ctx1.strokeRect(0, 0, 50, 100);

			ctx1.fill();
			ctx1.stroke();

		}

	}


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
	var theCanvas = document.getElementById('Canvas2');
	if(theCanvas && theCanvas.getContext){
		var ctx2 = theCanvas.getContext("2d");
		if(ctx2){

			
			ctx2.strokeStyle = 'black';
			ctx2.fillStyle = 'rgba(224, 64, 55, 0.5)';
			ctx2.lineWidth = 2;

			var degrees = 360;
			var radians = (degrees/180)*Math.PI;

			ctx2.beginPath();
			ctx2.arc(50, 50, 20, 0, radians);
			ctx2.fill();
			ctx2.stroke();
			
		}	
	}		



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
	var theCanvas = document.getElementById('Canvas3');
	if(theCanvas && theCanvas.getContext){
		var ctx3 = theCanvas.getContext("2d");
		if(ctx3){

			ctx3.strokeStyle = 'black';
			ctx3.fillStyle = 'yellow';
			ctx3.lineWidth = 3;

			ctx3.beginPath();
			ctx3.moveTo(100, 100);
			ctx3.lineTo(150, 250);
			ctx3.lineTo(25, 160);
			ctx3.lineTo(175, 160);
			ctx3.lineTo(50, 250);
			ctx3.closePath();
			ctx3.fill();
			ctx3.stroke();

			//just trying it without the stroke.
			ctx3.beginPath();
			ctx3.moveTo(100+200, 100);
			ctx3.lineTo(150+200, 250);
			ctx3.lineTo(25+200, 160);
			ctx3.lineTo(175+200, 160);
			ctx3.lineTo(50+200, 250);
			ctx3.closePath();
			ctx3.fill();
			//ctx3.stroke();

		}
	}		

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
	var theCanvas = document.getElementById('Canvas4');
	if(theCanvas && theCanvas.getContext){
		var ctx4 = theCanvas.getContext("2d");
		if(ctx4){

			ctx4.strokeStyle = 'red';
			ctx4.lineWidth = 5;

			ctx4.beginPath();
			ctx4.moveTo(100, 200);
			//bezierCurveTo(cx1, cy1, cx2, cy2, x, y)
			ctx4.bezierCurveTo(105, 170, 145, 170, 150, 200);
			ctx4.stroke();

			ctx4.beginPath();
			ctx4.moveTo(150, 200);
			ctx4.bezierCurveTo(155, 170, 195, 170, 200, 200);
			ctx4.stroke();

			ctx4.beginPath();
			ctx4.moveTo(200, 200);
			ctx4.bezierCurveTo(205, 170, 245, 170, 250, 200);
			ctx4.stroke();

			ctx4.beginPath();
			ctx4.moveTo(100,200);
			ctx4.bezierCurveTo(125, 80, 225, 80, 250, 200);
			ctx4.stroke();

			//Trying out quadraticCurveTo()
			ctx4.strokeStyle = 'rgba(5, 5, 5, .8)';
			ctx4.lineWidth = 3;
			ctx4.beginPath();
			ctx4.moveTo(175, 110);
			ctx4.quadraticCurveTo(140, 145, 150, 200)
			ctx4.stroke();

			ctx4.beginPath();
			ctx4.moveTo(175, 110);
			ctx4.quadraticCurveTo(205, 145, 200, 200)
			ctx4.stroke();

		}
	}		

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
	var theCanvas = document.getElementById('Canvas5');
	if(theCanvas && theCanvas.getContext){
		var ctx5 = theCanvas.getContext("2d");
		if(ctx5){

			var myText = "Hello world";

			//basic
			ctx5.fillText(myText, 25, 25);

			//styled size and font
			ctx5.font = '25pt Helvetica';
			ctx5.fillStyle = 'rgba(24, 155, 225, .5)';
			ctx5.fillText(myText, 25, 150);

			//+stroke + fill
			ctx5.lineWidth = 3;
			ctx5.font = '50pt Comic Sans MS';
			ctx5.fillStyle = 'rgba(0, 255, 125, .8)';
			ctx5.strokeStyle = 'rgba(255, 155, 225, .9)';
			ctx5.fillText('I hate comic sans', 25, 300);
			ctx5.strokeText('I hate comic sans', 25, 300);

		}
	}	

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

	//part 1
	var theCanvas = document.getElementById('Canvas6');
	if(theCanvas && theCanvas.getContext){
		var ctx6 = theCanvas.getContext("2d");
		if(ctx6){

			var srcImg = document.getElementById('logo');

			//method 1
			ctx6.drawImage(srcImg, 0, 0);
			
			//method 2 - scaled down by 50%
			ctx6.drawImage(srcImg, 0, 1100, 1650, 544);
			
			//method 3 - Sliced part of image
			//drawImage(srcImg, sx, sy, sw, sh, dx, dy, dw, dh)
			ctx6.drawImage(srcImg, 305, 584, 325, 424, 0, 1900, 76.6509434, 100);

		}
	}



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
	var theCanvas = document.getElementById('Canvas7');
	if(theCanvas && theCanvas.getContext){
		var ctx7 = theCanvas.getContext("2d");
		if(ctx7){

			//Background of scene
			ctx7.fillStyle = 'black';
			ctx7.fillRect(0, 0, 1280, 720);
			ctx7.fill();

			ctx7.fillStyle = 'white';
			ctx7.font = '40pt Helvetica';
			ctx7.fillText("Solar System Demo", 440, 80);

			//Sun

			//shadow
			ctx7.shadowColor = "rgba(255, 79, 0, 0.75)";
			ctx7.shadowOffsetX = 55;
			ctx7.shadowOffsetY = 0;
			ctx7.shadowBlur = 1400;

			//shape
			ctx7.fillStyle = 'rgba(222, 222, 0, 0.9)';
			var degrees = 360;
			var radians = (degrees/180)*Math.PI;
			ctx7.beginPath();
			ctx7.arc(-400, 370, 600, 0, radians);
			ctx7.fill();

			ctx7.save();
			ctx7.shadowColor = "rgba(0, 0, 0, .1)";
			ctx7.shadowOffsetX = 0;
			ctx7.shadowOffsetY = 0;
			ctx7.shadowBlur = 0;

			//Text
			ctx7.font = '25pt Helvetica';
			ctx7.fillStyle = 'white';
			ctx7.fillText("Sun", 45, 380);

			//Mercury
			ctx7.fillStyle = 'rgba(129, 92, 61, 0.9)';
			ctx7.beginPath();
			ctx7.arc(300, 380, 3, 0, radians);
			ctx7.fill();

			ctx7.font = '8pt Helvetica';
			ctx7.fillText("Mercury", 280, 395);

			//Venus
			ctx7.fillStyle = 'rgba(204, 92, 61, 0.9)';
			ctx7.beginPath();
			ctx7.arc(350, 380, 6.5, 0, radians);
			ctx7.fill();

			ctx7.font = '9pt Helvetica';
			ctx7.fillText("Venus", 333, 410);

			//Earth
			ctx7.fillStyle = 'rgba(52, 92, 232, 0.9)';
			ctx7.beginPath();
			ctx7.arc(400, 380, 7, 0, radians);
			ctx7.fill();

			ctx7.font = '9pt Helvetica';
			ctx7.fillText("Earth", 385, 410);

			//Mars
			ctx7.fillStyle = 'rgba(229, 67, 49, 0.9)';
			ctx7.beginPath();
			ctx7.arc(450, 380, 5, 0, radians);
			ctx7.fill();

			ctx7.font = '9pt Helvetica';
			ctx7.fillText("Mars", 436, 410);

			//Jupiter
			//Use of Images
			ctx7.drawImage(document.getElementById("jup"), 500, 250, 230, 230);

			ctx7.font = '25pt Helvetica';
			ctx7.fillStyle = 'rgba(125, 93, 67, 0.9)';
			ctx7.fillText("Jupiter", 557, 520);

			//Saturn
			ctx7.drawImage(document.getElementById("sat"), 690, 260, 400, 219.047619);
			ctx7.font = '25pt Helvetica';
			ctx7.fillStyle = 'rgba(189, 177, 132, 0.9)';
			ctx7.fillText("Saturn", 845, 520);

			//Uranus
			ctx7.fillStyle = 'rgba(46, 144, 206, 0.9)';
			ctx7.beginPath();
			ctx7.arc(1100, 375, 34, 0, radians);
			ctx7.fill();

			ctx7.font = '15pt Helvetica';
			ctx7.fillText("Uranus", 1067, 450);

			//Neptune
			ctx7.beginPath();
			ctx7.arc(1200, 375, 36, 0, radians);
			ctx7.fill();

			ctx7.font = '16pt Helvetica';
			ctx7.fillText("Neptune", 1163, 450);

		}
	}

} 