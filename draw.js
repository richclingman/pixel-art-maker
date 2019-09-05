document
    .getElementById('canvas')
    .addEventListener('click', event => event.target.style.backgroundColor = document.getElementById('currentColor').style.backgroundColor)

document
    .getElementById('palette')
    .addEventListener('click', event => {
        const selectedColor = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
        console.log(selectedColor);
        document.getElementById('currentColor').style.backgroundColor = selectedColor

    })

function createCanvas(height, width) {
    for (let rowNum = 0; rowNum < height; rowNum++) {
        const newRow = document.createElement('div');
        newRow.classList = ['row'];

        for (let i = 0; i < width; i++) {
            const newSquare = document.createElement('div')
            newSquare.classList = ['square'];

            newRow
                .appendChild(newSquare);

        }

        document
            .getElementById('canvas')
            .appendChild(
                newRow
            )
    }
}

createCanvas(12, 50);

function createPalette() {
    const colorArray = ['red', 'blue', 'brown', 'purple', 'forestgreen', 'violet', 'magenta', 'cyan', 'black'];
    const newRow = document.createElement('div');
    newRow.classList = ['row'];
    
    colorArray.forEach(color => {
        const colorBlock = document
            .createElement('div');
        
        colorBlock.classList = ['square'];
        colorBlock.style.backgroundColor = color;
    
        newRow.appendChild(colorBlock);
    })
    
    document.getElementById('palette').appendChild(newRow);
}
createPalette();


