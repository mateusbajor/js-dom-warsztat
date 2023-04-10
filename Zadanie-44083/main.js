console.log('Warsztat II');

function subForm(event) {
    event.preventDefault();

    for (let i = 0, el; el = document.querySelectorAll("#form input[name]")[i++];) {
        if (el.name === "fname")
            console.log(`Name: ${el.value}`)
    
        if (el.name === "lname")
        console.log(`Nazwisko: ${el.value}`)
    }
}

form.addEventListener('submit', subForm);

// let arr = document.querySelectorAll("#form input[name]");


