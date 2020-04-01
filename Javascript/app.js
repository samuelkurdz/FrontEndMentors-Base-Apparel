const email = document.querySelector('#email');
const error = document.querySelector('#email-err');

email.addEventListener('input', ()=> {
    email.setCustomValidity('');
})

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', submitHandler);

function submitHandler(e) {
    e.preventDefault();

    if(email.checkValidity() == false) {
        email.classList.add('input-err');
        error.classList.add('err-msg-show')

        if(email.validity.valueMissing) {
            error.innerText = 'Please Enter Email Address'
        } else if (email.validity.typeMismatch) {
            error.innerText = 'Please Enter a valid Email Address'
        }
        
        email.setCustomValidity(' ');
    } else {
        email.classList.remove('input-error')
        error.classList.remove('err-msg-show')
    }

}
