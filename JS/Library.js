function Line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); //set draw location
    ctx.lineTo(x2, y2);
    ctx.stroke(); //draw seps path
}
function Rect(x, y, w, h, mode) {
    // modelow = mode.toLowerCase;
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h);
    } else if (mode === "clear") {
        ctx.clearRect(x, y, w, h);
    }

}
function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}
function triangle(x1, y1, x2, y2, x3, y3, mode) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x1, y1);
    if (mode === "stroke") {
        ctx.stroke();
    } else {
        ctx.fill();
    }
}
function text(message, x, y, mode) {
    if (mode === "fill") {
        ctx.fillText(message, x, y);
    } else if (mode === "stroke") {
        ctx.strokeText(message, x, y);
    }
}
function ellipse(x, y, xRad, yRad, Rotation, mode) {
    ctx.beginPath();
    ctx.ellipse(x, y, xRad, yRad, Rotation, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }

}
function image(imgUrl,x,y,w,h) {
    ctx.drawImage(imgUrl,x,y,w,h);
    console.log("hi")

}
console.log("hi")

function imageClip(imgUrl,xc,yc,wc,hc,x,y,w,h) {
    console.log(wc)

    ctx.drawImage(imgUrl,xc,yc,wc,hc,x,y,w,h);
    console.log(wc)
}
function Fill(style) {
    ctx.fillStyle = style;
}
function Stroke(style) {
    ctx.strokeStyle = style;
}
function Font(fontype) {
    ctx.font = fontype;
}