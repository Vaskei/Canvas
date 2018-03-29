var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var boje = ["red", "green", "blue"];
var boja = boje[Math.floor(Math.random() * 3)];
console.log(boja);

c.fillStyle = boja;
c.fillRect(100, 100, 100, 100);
c.fillStyle = boja;
c.fillRect(200, 200, 100, 100);
c.fillStyle = boja;
c.fillRect(300, 300, 100, 100);
c.fillStyle = boja;
c.fillRect(400, 400, 100, 100);

//Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a4";
c.stroke();

//Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "orange";
// c.stroke();

for (var i = 0; i < 200; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "orange";
    c.stroke();
}