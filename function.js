/**
 * Age Calculator
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */
    function ageCal(name, year){
        let date = new Date();
        age = date.getFullYear() - year;

        let ageStatus = checkAgeStatus(age);
        return` <p class="alert alert-${ ageStatus.status }"> Hi ${name} You are ${age} years old & you are ${ ageStatus.name }</p>`
    };


/**
 * Check Age Status
 * @param {*} age 
 * @returns 
 */
    function checkAgeStatus( age ){
        if( age > 0 && age < 8 ){
            return {
                name : 'Baby',
                status : 'primary'
            };
        }else if( age >= 8 && age < 18 ){
            return {
                name : 'Kishor',
                status : 'info'
            };
        }else if( age >= 18 && age < 30 ){
            return {
                name : 'Jubok',
                status : 'success'
            };
        }else if( age >= 30 && age < 50 ){
            return {
                name : 'Boyoshko',
                status : 'warning'
            };
        }else if( age >= 50 && age < 70 ){
            return {
                name : 'Old man',
                status : 'Danger'
            };
        }else{
            return {
                name : 'Jin/bhoot',
                status : 'dark'
            };
        }
    };