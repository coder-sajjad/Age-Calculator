
//  Age Calculator
    const button = document.querySelector('#ageCheck');
    const name = document.querySelector('#name');
    const year = document.querySelector('#birthYear');
    const result = document.querySelector('#showResult');
    

    button.addEventListener('click', () => {

        name.style.border = ( name.value == '' ) ? "1px solid red" : "1px solid grey";
        
        year.style.border = ( year.value == '' ) ? "1px solid red" : "1px solid grey";

        if( name.value == '' || year.value == '' ){
            result.innerHTML = `<p class="alert alert-danger"> All fields are Required </p>`;
        }else{

            result.innerHTML = ageCal(name.value, year.value);
            name.value = '';
            year.value = '';

        }

    });


//  Registration Form
    const mainForm = document.querySelector('#mainForm');
    const firstName = document.querySelector('#firstName');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const signUp = document.querySelector('#signUp');
    const showResult = document.querySelector('.showResult');
    const userShow = document.querySelector('#userShow');

    mainForm.addEventListener('submit', function(e){
        e.preventDefault();

        firstName.style.border = ( firstName.value == '' ) ? "1px solid red" : "1px solid grey";

        username.style.border = ( username.value == '' ) ? "1px solid red" : "1px solid grey";

        email.style.border = ( email.value == '' ) ? "1px solid red" : "1px solid grey";

        password.style.border = ( password.value == '' ) ? "1px solid red" : "1px solid grey";
        
        if( firstName.value == '' || username.value == '' || email.value == '' || password.value == '' ){
            showResult.innerHTML = `<p class="alert alert-danger"> All fields are required </p>`;
        }else{
            showResult.innerHTML = `<p class="alert alert-success"> Data Stable </p>`;
        }

        firstName.value = '';
        username.value = '';
        email.value = '';
        password.value = '';

    });


//  Currency Converter
    const currencyForm = document.querySelector('#currencyForm');
    const currencyEmail = document.querySelector('#currencyEmail');
    const amount = document.querySelector('#amount');
    const select = document.querySelector('#select');
    const messages = document.querySelector('.messages');

    currencyForm.onsubmit = (e) => {
        e.preventDefault();

        currencyEmail.style.border = ( currencyEmail.value == '' ) ? "1px solid red" : "1px solid grey";

        amount.style.border = ( amount.value == '' ) ? "1px solid red" : "1px solid grey";

        select.style.border = ( select.value == '' ) ? "1px solid red" : "1px solid grey";

        if( currencyEmail.value == '' || amount.value == '' || select.value == '' ){
            messages.innerHTML = `<p class="alert alert-danger"> All fields are Required </p>`;
        }else{
            messages.innerHTML = myCurrency(amount.value, select.value );

            currencyEmail.value = '';
            amount.value = '';
            select.value = '';
        }   
        
    };


//  Marriage Age Check Calculator
    const mAgeform = document.querySelector('#mAgeform');
    const marriageName = document.querySelector('#marriageName');
    const marriageAge = document.querySelector('#marriageAge');
    const marriageButton = document.querySelector('#marriageButton');
    const ageResult = document.querySelector('.ageResult');

    mAgeform.onsubmit = (e) => {
        e.preventDefault();

        marriageName.style.border = ( marriageName.value == '' ) ? "1px solid red" : "1px solid grey";

        marriageAge.style.border = ( marriageAge.value == '' ) ? "1px solid red" : "1px solid grey";

        if( marriageName.value == '' || marriageAge.value == '' ){
            ageResult.innerHTML = `<p class="alert alert-danger"> All fields are required </p>`;
        }else{
            ageResult.innerHTML = mageCheck(marriageName.value, marriageAge.value);

            marriageName.value = '';
            marriageAge.value = '';
        }
        
    };