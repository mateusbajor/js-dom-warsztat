console.log('Warsztat III');

let newsletterForm = document.getElementById('form');
let allAgreeChx = document.getElementById('checkbox-all');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('checkbox-1');
    let errorList = document.getElementById('errors');

    errorList.innerHTML = '';

    if (txtName.value.trim() === '') {
        let liError = document.createElement('li')
        liError.innerText = 'Wpisz Imię i Nazwisko!';
        errorList.appendChild(liError)
    }

    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li')
        liError.innerText = 'Wpisz Adres e-mail!';
        errorList.appendChild(liError)
    }

    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li')
        liError.innerText = 'Adres e-mail musi zawierać @!';
        errorList.appendChild(liError)
    }

    if (!agree1.checked) {
        let liError = document.createElement('li')
        liError.innerText = 'Nie wyrażiłeś zgody 1!';
        errorList.appendChild(liError)
    }

    if (errorList.children.length > 0){
        event.preventDefault();
    }
}

const allAgree = (event) => {
    let agree1 = document.getElementById('checkbox-1');
    let agree2 = document.getElementById('checkbox-2');

    agree1.checked = event.target.checked
    agree2.checked = event.target.checked

    agree1.disabled = event.target.checked
    agree2.disabled = event.target.checked
}


newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change',allAgree);

