"use strict";
const canvas = document.getElementById('fractalCanvas');
const context = canvas.getContext('2d');
function drawKochCurve(x1, y1, x2, y2, depth) {
    if (depth === 0) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }
    else {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 3;
        const xA = x1 + deltaX / 3;
        const yA = y1 + deltaY / 3;
        const xB = xA + (Math.cos(Math.PI / 3) * length);
        const yB = yA + (Math.sin(Math.PI / 3) * length);
        const xC = x1 + 2 * deltaX / 3;
        const yC = y1 + 2 * deltaY / 3;
        drawKochCurve(x1, y1, xA, yA, depth - 1);
        drawKochCurve(xA, yA, xB, yB, depth - 1);
        drawKochCurve(xB, yB, xC, yC, depth - 1);
        drawKochCurve(xC, yC, x2, y2, depth - 1);
    }
}
function drawFractal() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const depth = 4; // フラクタルの深さ
    const startX = 50;
    const startY = 200;
    const endX = 550;
    const endY = 200;
    drawKochCurve(startX, startY, endX, endY, depth);
}
drawFractal();
