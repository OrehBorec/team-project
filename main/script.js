const buttonPlus = document.querySelector('.plus');
let isRotated = false;
const formContainer = document.querySelector('.form-container')

buttonPlus.addEventListener('click', () => {
    if (!isRotated) {
         formContainer.style.transform = 'scale(1)'
         formContainer.style.transition = '1s';
        formContainer.style.display = 'flex';
        buttonPlus.style.transform = 'rotate(45deg)';
        buttonPlus.style.backgroundColor = 'red';
        isRotated = true;
    } else {
        formContainer.style.transform = 'scale(0)';
        formContainer.style.transition = '0.5s';
        buttonPlus.style.transform = 'rotate(0deg)'; 
        buttonPlus.style.backgroundColor = 'rgb(128, 0, 255)';
        isRotated = false; 
    }
});

