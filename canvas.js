var canvas = document.getElementById("clock");
var ctx = canvas.getContext("2d");

canvas.height = 800;
canvas.width = 800;

var analog = true;

function toggle() {
 analog = !analog;
 console.log(analog);
}    

function drawAnalog() {
    if (analog) {
        ctx.clearRect(0,0,canvas.width, canvas.height);
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

function drawDigital(){
    if (!analog) {
        ctx.clearRect(0,0,canvas.width, canvas.height);

        clockData();
        var time = "";
        if(hours < 10){
            time +='0';
        }
        time += hours + ":";
        if(minutes < 10){
            time +='0';
        }
        time += minutes + ":";
        if(seconds < 10){
            time +='0';
        }
        time += seconds;
        ctx.fillStyle = "#00B288";//green
        ctx.textAlign = "center";
        ctx.font = "150px Impact";
        ctx.fillText(time, canvas.width/2, canvas.height/2);
        ctx.strokeStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "151px Impact";
        ctx.strokeText(time, canvas.width/2, canvas.height/2);
    }
    requestAnimationFrame(drawDigital);
}


requestAnimationFrame(drawAnalog);
requestAnimationFrame(drawDigital);
