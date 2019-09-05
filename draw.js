document
.getElementById('canvas')
.addEventListener('click', event => event.target.style.backgroundColor = 'blue')

document
.getElementById('palette')
.addEventListener('click', event => {
    const selectedColor = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
    console.log(selectedColor);
    document.getElementById('currentColor').style.backgroundColor = selectedColor

})