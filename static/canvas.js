var canvas = document.getElementById("clock");
var ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 530;

var analog = true;

var temperature = parseFloat(document.getElementById("temp").textContent).toFixed(2);
console.log(temperature)

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


function toggle() {
    analog = !analog;
    if (analog) {
        document.getElementById("toggle").textContent = "Digital";
    }
    else {
        document.getElementById("toggle").textContent = "Analog";
    }
}

function drawAnalog() {
    if (analog) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI, false);

        ctx.strokeStyle = "#00B288";//green
        ctx.lineWidth = 10;

        ctx.stroke();

        //ticks
        ctx.lineWidth = 5;

        for (let i = 0; i < 12; i++) {
            let theta = i * 2 * Math.PI / 12;
            let length = 10 + ((i % 3 == 0) ? 10 : 0);
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(theta);
            ctx.translate(-canvas.width / 2, -canvas.height / 2);

            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2 + 195);
            ctx.lineTo(canvas.width / 2, canvas.height / 2 + 195 - length);
            ctx.stroke();

            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(-theta);
            ctx.translate(-canvas.width / 2, -canvas.height / 2);
        }

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

        ctx.fillStyle = "#00B288";//green
        ctx.textAlign = "center";
        ctx.font = "150px Impact";
        ctx.fillText(weekday[day], canvas.width / 2, canvas.height / 2 + 120);
        ctx.strokeStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "151px Impact";
        ctx.strokeText(weekday[day], canvas.width / 2, canvas.height / 2 + 120);        
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

    ctx2.fillText(temperature + "°F", canvas2.width/2, canvas2.height/2);
    ctx2.strokeStyle = "white";
    ctx2.textAlign = "center";
    ctx2.font = "60.5px Impact";
    ctx2.strokeText(temperature + "°F", canvas2.width/2, canvas2.height/2);
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