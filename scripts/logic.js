let color = '#000000';

var mouseDown = false;
document.body.onmousedown = function() { 
  mouseDown = true;
}
document.body.onmouseup = function() {
  mouseDown = false;
}

const sketchContainer = document.querySelector('.container');

for(let i = 0; i < 16; i++){
    const column = document.createElement('div');
    column.classList.add('containerbaby');
    for(let j = 0; j < 16; j++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        column.appendChild(newDiv);
    }
    sketchContainer.appendChild(column);
}

const drawingBoxes = document.querySelectorAll('.box');

drawingBoxes.forEach(function(drawingBox){
    drawingBox.addEventListener('mouseover', function handleMouseOver(){
        if(mouseDown){
            drawingBox.style.backgroundColor = color;
        }
    });

    drawingBox.addEventListener('mousedown',function handleMouseClick(){
        drawingBox.style.backgroundColor = color;
    });
});

function ClearCanvas(){
    drawingBoxes.forEach(function(drawingBox){
        drawingBox.style.backgroundColor = 'white';
    });
}

function randomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    color = '#' + randomColor;
}

function Eraser(){
    color = '#ffffff'
}
