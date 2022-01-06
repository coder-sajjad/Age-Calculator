/**
 * Age Calculator Function
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */
    function ageCal(name, year){
        let date = new Date();
        let age = date.getFullYear() - year;

        let ageStatus = checkAgeStatus(age);
        return` <p class="alert alert-${ ageStatus.status }"> Hi ${name} You are ${age} years old & you are ${ ageStatus.name }</p>`
    };


/**
 * Check Age Status Function
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



/**
 * Currency Converter function
 * @param {*} amount 
 * @param {*} currency 
 * @returns 
 */
    function myCurrency( amount, currency ){
        if(amount == '' || currency == ''){
            return ` All fields are required `;
        }else if( currency == 'USD' ){
            return ` ${amount} ${currency} = ${amount * 84} taka`;
        }else if( currency == 'CAD' ){
            return ` ${amount} ${currency} = ${amount * 68} taka`;
        }else if( currency == 'POUND' ){
            return ` ${amount} ${currency} = ${amount * 116} taka`;
        }else if( currency == 'EURO' ){
            return ` ${amount} ${currency} = ${amount * 98} taka`;
        }else{
            return`This Currency is't Our System`;
        }
    }


/**
 * Marriage Age Check Function
 * @param {*} name 
 * @param {*} age 
 * @returns 
 */
    function mageCheck(name, age){
        if( age > 0 && age <= 10 ){
            return`Hi ${ name } Your ${ age } years old. "You baby" Pls wait for marriage ${ 21 - age } years.`;
        }else if( age >= 11 && age < 21 ){
            return`Hi ${ name } Your ${ age } years old. "You young" pls wait for marriage ${ 21 - age } years.`;
        }else if( age >= 21 && age < 22 ){
            return`Hi ${ name } Your ${ age } years old. "You adult" your age perfect for marriage ${ 21 - age } years.`;
        }else if( age >= 22 && age < 45 ){
            return`Hi ${ name } Your ${ age } years old. Apnar ${ age - 21 } bosor age biyer boyosh hoyese`;
        }else if( age >= 45 && age < 65 ){
            return`Hi ${ name } Your ${ age } years old. Apni boyoshko &  ${ age - 21 } bosor age biye kora uchit silo apnar.`;
        }else if( age >= 65 && age <= 200 ){
            return`Hi ${ name } Your ${ age } years old. You extra old & rest a thaka uchit Akhon biye kora thik hobe na.`;
        }
   }

   