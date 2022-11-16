let color = '#000000';
let lastColor = '#000000';
let isEraserActive = false;
let rainbowMode = false;

const colorPicker = document.querySelector('.color-picker');
colorPicker.style.backgroundColor = color;

var mouseDown = false;
document.body.onmousedown = function() { 
  mouseDown = true;
}
document.body.onmouseup = function() {
  mouseDown = false;
}

function ClearCanvas(){
    const drawingBoxes = document.querySelectorAll('.box');
    
    drawingBoxes.forEach(function(drawingBox){
        drawingBox.style.backgroundColor = 'white';
    });
}

function RandomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    color = '#' + randomColor;
    colorPicker.style.backgroundColor = color;
    return color;
}

function Eraser(){
    if(isEraserActive){
        color = '#000000';
        isEraserActive = false;
        colorPicker.style.backgroundColor = color;
    }else if(!isEraserActive && !rainbowMode){
        color = '#ffffff';
        isEraserActive = true;
        colorPicker.style.backgroundColor = color;
    }else{
        color = '#ffffff';
        isEraserActive = true;
        rainbowMode = false;
        colorPicker.style.backgroundColor = color;
    }
}

function RainbowActive(){
    if(rainbowMode && !isEraserActive){
        rainbowMode = false;
        color = '#000000';
        colorPicker.style.backgroundColor = color;
    }else if(!rainbowMode && !isEraserActive){
        rainbowMode = true;
        color = RandomColor();
        colorPicker.style.backgroundColor = color;
    }else if(!rainbowMode && isEraserActive){
        rainbowMode = true;
        isEraserActive = false;
        color = RandomColor();
        colorPicker.style.backgroundColor = color;
    }
}

const slider = document.querySelector('.canvas-size');
slider.onchange = function() {
    DeleteLastBoxes();
    CreateCanvas(slider.value);
}

function DeleteLastBoxes(){
    const lastColumns = document.querySelectorAll('.containerbaby');
    const lastBoxes = document.querySelectorAll('.box');

    lastColumns.forEach(column => {
        column.remove();
    });

    lastBoxes.forEach(box => {
        box.remove();
    });
}

function CreateCanvas(size){
    const sketchContainer = document.querySelector('.container');

    for(let i = 0; i < size; i++){
        const column = document.createElement('div');
        column.classList.add('containerbaby');
        for(let j = 0; j < size; j++){
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
                if(rainbowMode && !isEraserActive){
                    drawingBox.style.backgroundColor = RandomColor();
                }else if(rainbowMode && isEraserActive){
                    drawingBox.style.backgroundColor = color;
                }else{
                    drawingBox.style.backgroundColor = color;
                }
            }
        });

        drawingBox.addEventListener('mousedown',function handleMouseClick(){
            if(rainbowMode && !isEraserActive){
                drawingBox.style.backgroundColor = RandomColor();
            }else if(rainbowMode && isEraserActive){
                drawingBox.style.backgroundColor = color;
            }else{
                drawingBox.style.backgroundColor = color;
            }
        });
    });
}

CreateCanvas(16);