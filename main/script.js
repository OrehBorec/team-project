const buttonPlus = document.querySelector('.plus');
let isRotated = false;

buttonPlus.addEventListener('click', () => {
    if (!isRotated) {
        buttonPlus.style.transform = 'rotate(45deg)';
        buttonPlus.style.backgroundColor = 'red';
        isRotated = true;
    } else {
        buttonPlus.style.transform = 'rotate(0deg)'; 
        buttonPlus.style.backgroundColor = 'rgb(128, 0, 255)';
        isRotated = false; 
    }
});