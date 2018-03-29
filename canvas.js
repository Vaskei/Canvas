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

var mouse = {
	x: undefined,
	y: undefined
}

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
	'#6C6E58',
	'#3E423A',
	'#417378',
	'#A4CFBE',
	'#F4F7D9'
];

window.addEventListener('mousemove', function (event) {
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener('resize', function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
});

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
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

		// interactivity
		if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
			if (this.radius < maxRadius) {
				this.radius += 1;
			}
		}
		else if (this.radius > this.minRadius) {
			this.radius -= 1;
		}

		this.draw();
	};
}

var circleArray = [];

for (var i = 0; i < 800; i++) {
	var radius = Math.random() * 6 + 1; //promjer kruga
	var x = Math.random() * (innerWidth - radius * 2) + radius; // x koordinata kruga
	var y = Math.random() * (innerHeight - radius * 2) + radius;
	var dx = (Math.random() - 0.5); // brzina po x osi
	var dy = (Math.random() - 0.5);

	circleArray.push(new Circle(x, y, dx, dy, radius));
}

var circleArray = [];

function init() {
	circleArray = [];

	for (var i = 0; i < 800; i++) {
		var radius = Math.random() * 6 + 1; //promjer kruga
		var x = Math.random() * (innerWidth - radius * 2) + radius; // x koordinata kruga
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = (Math.random() - 0.5); // brzina po x osi
		var dy = (Math.random() - 0.5);

		circleArray.push(new Circle(x, y, dx, dy, radius));
	}
}

var x = Math.random() * innerWidth; // x koordinata kruga
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5); // brzina po x osi
var dy = (Math.random() - 0.5);
var radius = 30; // promjer kruga

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

init();
animate();
