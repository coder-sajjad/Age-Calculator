
    const button = document.querySelector('#ageCheck');
    const name = document.querySelector('#name');
    const year = document.querySelector('#birthYear');
    const result = document.querySelector('#showResult');
    

    button.addEventListener('click', () => {
        
        if( name.value == '' || year.value == '' ){
            result.innerHTML = `<p class="alert alert-danger"> All fields are Required </p>`;
        }else{

            result.innerHTML = ageCal(name.value, year.value);
            name.value = '';
            year.value = '';

        }

    });

    