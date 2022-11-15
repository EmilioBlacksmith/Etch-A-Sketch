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