window.onload = function(){

	//Modernizr
	if(Modernizr.canvas){
		console.log("Canvas is supported!");
	}else{
		console.log("Canvas is not supported");
	}
	

	var theCanvas = document.getElementById('Hello');
	if(theCanvas && theCanvas.getContext){
		var ctx1 = theCanvas.getContext("2d");
		if(ctx1){

			ctx1.font = "25pt 'Muli'";
			ctx1.fillStyle = '#00ccff';
			ctx1.fillText("Hello, we're", 25, 80);
		}
	}

	//Canvas draw Atrio Logo
	var theCanvas = document.getElementById('Logo');
	if(theCanvas && theCanvas.getContext){
		var ctx2 = theCanvas.getContext("2d");
		if(ctx2){
			var srcImg = document.getElementById('logo');
			ctx2.drawImage(srcImg, 0, 0, 360, 140.25);
			
		}
	}	


	//Canvas arrow
	var theCanvas = document.getElementById('Arrow');
	if(theCanvas && theCanvas.getContext){
		var ctx3 = theCanvas.getContext("2d");
		if(ctx3){

			ctx3.strokeStyle = '#ffffff';
			ctx3.fillStyle = '#ffffff';
			ctx3.lineWidth = 5;
			ctx3.lineJoin = "round";
			
			ctx3.beginPath();
			ctx3.moveTo(80, 0);
			ctx3.lineTo(200, 0);
			ctx3.lineTo(200, 330);
			ctx3.lineTo(250, 330);
			ctx3.lineTo(140, 445);
			ctx3.lineTo(30, 330);
			ctx3.lineTo(80, 330)
			
			ctx3.closePath();

			ctx3.fill();
			ctx3.stroke();
		}
	}


	var theCanvas = document.getElementById('Arrow2');
	if(theCanvas && theCanvas.getContext){
		var ctx4 = theCanvas.getContext("2d");
		if(ctx4){

			ctx4.strokeStyle = '#000000';
			ctx4.fillStyle = '#000000'
			ctx4.lineWidth = 5;
			ctx4.lineJoin = "round";
			
			ctx4.beginPath();
			ctx4.moveTo(80 - 23, 0);
			ctx4.lineTo(200 - 23, 0);
			ctx4.lineTo(200 - 23, 330);
			ctx4.lineTo(250 - 23, 330);
			ctx4.lineTo(140 - 23, 445);
			ctx4.lineTo(30 - 23, 330);
			ctx4.lineTo(80 - 23, 330)
			
			ctx4.closePath();

			ctx4.fill();
			ctx4.stroke();
		}
	}
console.log("Hello");
}