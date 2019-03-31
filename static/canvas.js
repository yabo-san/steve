var canvas = document.getElementById("clock");
var ctx = canvas.getContext("2d");

canvas.height = 800;
canvas.width = 800;

var analog = true;

var tempurature = "72";

function toggle() {
    analog = !analog;
    console.log(analog);
}

function drawAnalog() {
    if (analog) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI, false);

        ctx.strokeStyle = "#00B288";//green
        ctx.lineWidth = 10;

        ctx.stroke();

        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 205, 0, 2 * Math.PI, false);

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 1.5;

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
        ctx.lineTo(canvas.width / 2, canvas.height / 2 - 120);

        ctx.stroke();

        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(-hour);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);

        //minute hand
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(minute);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);


        ctx.beginPath();
        ctx.lineWidth = 7;

        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(canvas.width / 2, canvas.height / 2 - 160);

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
        ctx.lineTo(canvas.width / 2, canvas.height / 2 - 175);

        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(-second);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);

        ctx.stroke();
    }
    requestAnimationFrame(drawAnalog);
}

function drawDigital() {
    if (!analog) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        clockData();
        var time = "";
        if (hours < 10) {
            time += '0';
        }
        time += hours + ":";
        if (minutes < 10) {
            time += '0';
        }
        time += minutes + ":";
        if (seconds < 10) {
            time += '0';
        }
        time += seconds;
        ctx.fillStyle = "#00B288";//green
        ctx.textAlign = "center";
        ctx.font = "150px Impact";
        ctx.fillText(time, canvas.width / 2, canvas.height / 2);
        ctx.strokeStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "151px Impact";
        ctx.strokeText(time, canvas.width / 2, canvas.height / 2);
    }
    requestAnimationFrame(drawDigital);
}


requestAnimationFrame(drawAnalog);
requestAnimationFrame(drawDigital);

var canvas2 = document.getElementById("weather");
var ctx2 = canvas2.getContext("2d");
canvas2.height = 200;
canvas2.width = 200;

function drawWeather() {
    ctx2.fillStyle = "#00B288";//green
    ctx2.textAlign = "center";
    ctx2.font = "60px Impact";
    ctx2.fillText(tempurature + "°", canvas2.width/2, canvas2.height/2);
    ctx2.strokeStyle = "white";
    ctx2.textAlign = "center";
    ctx2.font = "60.5px Impact";
    ctx2.strokeText(tempurature + "°", canvas2.width/2, canvas2.height/2);
    //requestAnimationFrame(drawWeather);
}
drawWeather();
//requestAnimationFrame(drawWeather);

var scores = document.getElementById("scores").textContent.split("|");
console.log(scores);

var canvas3 = document.getElementById("graph");
var ctx3 = canvas3.getContext("2d");
canvas3.height = 200;
canvas3.width = 400;

var bar_width = canvas3.width / scores.length;
for (var i = 0; i < scores.length; i++) {
    ctx3.fillStyle = (scores[i] >= 0) ? "#00B288" : "#f21a78";
    ctx3.fillRect(i * bar_width, canvas3.height / 2, bar_width, scores[i] * -100);
}
ctx3.beginPath();
ctx3.lineWidth = 3;
ctx3.strokeStyle = "33334d";
ctx3.moveTo(0, canvas3.height / 2);
ctx3.lineTo(canvas3.width, canvas3.height / 2);
ctx3.stroke();