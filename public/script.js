const socket = io();
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let color = '#000000';
let size = 5;
let eraserMode = false;

const roomId = getQueryParam(window.location.href, 'roomId');

window.onload = function() {
    if(!roomId)
    {
        roomId = getQueryParam(window.location.href, 'roomId');   
    }
    document.getElementById('roomId').value = roomId;
};

function getQueryParam(url, param) {
    const urlSearchParams = new URLSearchParams(url.split('?')[1]);
    return urlSearchParams.get(param)
}

socket.emit('joinRoom', roomId);

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    const newX = e.offsetX;
    const newY = e.offsetY;

    if (eraserMode) {
        drawLine(lastX, lastY, newX, newY, '#FFFFFF', size);
        socket.emit('draw', roomId, { lastX, lastY, newX, newY, color: '#FFFFFF', size });
    } else {
        drawLine(lastX, lastY, newX, newY, color, size);
        socket.emit('draw', roomId, { lastX, lastY, newX, newY, color, size });
    }

    [lastX, lastY] = [newX, newY];
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});

socket.on('draw', (data) => {
    drawLine(data.lastX, data.lastY, data.newX, data.newY, data.color, data.size);
});

function drawLine(startX, startY, endX, endY, lineColor, lineWidth) {
    ctx.beginPath();
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.closePath();
}

document.getElementById('colorPicker').addEventListener('input', (e) => {
    color = e.target.value;
});

document.getElementById('sizePicker').addEventListener('input', (e) => {
    size = parseInt(e.target.value);
});

document.getElementById('eraserCheckbox').addEventListener('change', (e) => {
    eraserMode = e.target.checked;
});