var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// var boje = ["red", "green", "blue"];
// var boja = boje[Math.floor(Math.random() * 3)];
// console.log(boja);

// c.fillStyle = boja;
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = boja;
// c.fillRect(200, 200, 100, 100);
// c.fillStyle = boja;
// c.fillRect(300, 300, 100, 100);
// c.fillStyle = boja;
// c.fillRect(400, 400, 100, 100);

// //Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a4";
// c.stroke();

//Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "orange";
// c.stroke();

// for (var i = 0; i < 200; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = "orange";
//     c.stroke();
// }

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = "blue";
		c.stroke();
		c.fillStyle = "aqua";
		c.fill();
	};

	this.update = function () {
		if (this.x + this.radius > innerWidth || this.x - radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y - radius < 0) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	};
}

var circleArray = [];

for (var i = 0; i < 200; i++) {
	var radius = 30; //promjer kruga
	var x = Math.random() * (innerWidth - radius * 2) + radius; //x koordinata kruga
	var y = Math.random() * (innerHeight - radius * 2) + radius;
	var dx = (Math.random() - 0.5); //brzina po x osi
	var dy = (Math.random() - 0.5);

	circleArray.push(new Circle(x, y, dx, dy, radius));
}

var x = Math.random() * innerWidth; //x koordinata kruga
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5); //brzina po x osi
var dy = (Math.random() - 0.5);
var radius = 30; //promjer kruga

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();
