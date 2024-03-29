// Drawing Shapes with the Canvas API
var canvas = document.getElementById("canvas1"),
    ctx = canvas.getContext("2d");

    canvas.width = canvas.height = 200;

    // draw two blue circles
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(50, 50, 25, 0, Math.PI * 2, true);
    ctx.arc(150, 50, 25, 0, Math.PI * 2, true);
    ctx.fill();

    // draw a red traingle
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(100, 75);
    ctx.lineTo(75, 125);
    ctx.lineTo(125, 125);
    ctx.fill()

    // draw a green semi-circle
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.scale(1, 0.5);
    ctx.arc(100, 300, 75, Math.PI, 0, true);
    ctx.closePath();
    ctx.stroke();
