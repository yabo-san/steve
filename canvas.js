
var canvas = document.getElementById("clock");
var ctx = canvas.getContext("2d");

canvas.height = 250;
canvas.width = 250;

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI, false);

ctx.strokeStyle = "#f3306e";
ctx.lineWidth = 10;
ctx.stroke();

function drawAnalog() {
    clockData();

    let hour = hours;
    let minute = 90;
    let second = 45;

    //hour hand
    ctx.strokeStyle = "#33334d";
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(hour);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    ctx.beginPath();
    ctx.lineWidth = 10;

    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2, canvas.height / 2 - 90);

    ctx.stroke();

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-hour);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    //minute hand
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(minute);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);


    ctx.beginPath();
    ctx.lineWidth = 6;

    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2, canvas.height / 2 - 90);

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-minute);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    ctx.stroke();


    //second hand
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(second);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);


    ctx.beginPath();
    ctx.lineWidth = 3;

    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2, canvas.height / 2 - 90);

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-second);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    ctx.stroke();
}

drawAnalog();