const buttonPlus = document.querySelector('.plus');
let isRotated = false;

buttonPlus.addEventListener('click', () => {
    if (!isRotated) {
        buttonPlus.style.transform = 'rotate(45deg)';
        isRotated = true;
    } else {
        buttonPlus.style.transform = 'rotate(0deg)'; 
        isRotated = false; 
    }
});