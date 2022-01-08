window.onload = function(){
    let p = document.createElement('p');
    let emailDiv = document.getElementById("emailDiv");
    let passDiv = document.getElementById('passDiv');
    document.body.appendChild(p);

     document.forms[0].addEventListener('submit', function (e) {
        let isValid = true;
        let pass = document.getElementById('pass');
        let correctPass = document.getElementById('repPass');
        let pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        let email = document.getElementById('email');
        let testEmail = pattern.test(email.value);


        if (!testEmail) {
            isValid = false;
            emailDiv.style.color = 'red';
            emailDiv.innerHTML = 'Данные введены неверно';
        } else emailDiv.innerHTML = "";

        if (pass.value != correctPass.value) {
            isValid = false;
            passDiv.style.color = 'red';
            passDiv.innerHTML = 'Пароли не совпадают';
        } else passDiv.innerHTML = '';

        for (let i = 0; i < document.forms[0].elements.length; i++) {
            if (document.forms[0].elements[i].value.length == 0) {
                    isValid = false;
            }
        }
        if (!isValid) {
            e.preventDefault();
            p.style.color = 'red';
            p.innerHTML = 'Необходимо заполните все поля';
        }
    });

}