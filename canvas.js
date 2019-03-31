
var canvas = document.getElementById("clock");
var ctx = canvas.getContext("2d");

canvas.height = 250;
canvas.width = 250;

let analog = true;

function drawAnalog() {
    if (!analog) return;

    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI, false);

    ctx.strokeStyle = "#f3306e";
    ctx.lineWidth = 10;
    ctx.stroke();

    clockData();

    let hour = (hours * 3600 + minutes * 60 + seconds) * 2 * Math.PI / (3600 * 12);
    let minute = (seconds + minutes * 60) * 2 * Math.PI / (3600);
    let second = seconds * 2 * Math.PI / 60;

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

    requestAnimationFrame(drawAnalog);
}

function drawDigital(){
    if (analog) return;

    ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.font = "30px Arial";
    ctx.fillText(hours + ":" + minutes + ":" + seconds, 10, 50);

    requestAnimationFrame(drawDigital);
}


requestAnimationFrame(drawAnalog);
requestAnimationFrame(drawClock);
