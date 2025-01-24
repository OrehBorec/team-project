const buttonPlus = document.querySelector('.plus');
let isRotated = false;
const formContainer = document.querySelector('.form-container')
const btnSumbit = document.querySelector('.btn.submit')
const form = document.querySelector('.form');
const submitButton = document.querySelector('.btn.submit');



buttonPlus.addEventListener('click', () => {
    if (!isRotated) {
         formContainer.style.transform = 'scale(1)'
         formContainer.style.transition = '1s';
        formContainer.style.display = 'flex';
        buttonPlus.style.transform = 'rotate(45deg)';
        buttonPlus.style.backgroundColor = 'gray';
        isRotated = true;
    } else {
        formContainer.style.transform = 'scale(0)';
        formContainer.style.transition = '0.5s';
        buttonPlus.style.transform = 'rotate(0deg)'; 
        buttonPlus.style.backgroundColor = 'rgb(128, 0, 255)';
        isRotated = false; 
    }
});

const bookContainer = document.querySelector('.book-container')

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    formContainer.style.transform = 'scale(0)';
    buttonPlus.style.transform = 'rotate(0deg)'; 
    buttonPlus.style.backgroundColor = 'rgb(128, 0, 255)';
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('book-pages').value;
    const readStatus = document.querySelector('input[name="read"]:checked').value;

    if (!title || !author || !pages) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    const book = document.createElement('div');
    book.classList.add('book');
    book.innerHTML = `
        <h2>${title}</h2>
        <p><strong>Author:</strong> ${author}</p>
        <p><strong>Pages:</strong> ${pages}</p>
        <p>
            <strong>Read:</strong> 
            <div class="read-status">
                <input name="${pages}" type="radio" value="read-yes" ${readStatus === 'read-yes' ? 'selected' : ''}>Yes</input>
                <input name="${pages}" type="radio" value="read-no" ${readStatus === 'read-no' ? 'selected' : ''}>No</input>
            </div>
        </p>
        <button class="btn delete">Delete</button>
    `;

    const deleteButton = book.querySelector('.btn.delete');
    deleteButton.addEventListener('click', () => {
        bookContainer.removeChild(book);
    });


    bookContainer.appendChild(book);

    form.reset();
});

