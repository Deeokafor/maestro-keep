let modal = document.querySelector('#message-core');
let generate_button = document.getElementById('generate_button');

generate_button.addEventListener('click', generate_password(12))

function generate_password(pswdLen) {
    'use strict';
    
    const chars = `qwertyuiopasdfghjklzxcvbnm*&^%$#_~@=`;
    //let gend_pswd = '';
    let arr_of_pswds = [];
    let gend_pswd2 = '';
    
    //generate random passwords
    function gen () {
        let gend_pswd = '';
        for(let i = 0; i < pswdLen; i++) {
            gend_pswd += chars[Math.trunc(Math.random() * chars.length)];
        }
        return gend_pswd;
    }
    //console.log(gen());
    
    //Function to generate different passwords n number of times
    function gen_n_times() {
        for (let k = 0; k < pswdLen; k++) {
            gend_pswd2 = gen();
            arr_of_pswds.push(gend_pswd2);
        }
        console.log(gend_pswd2, arr_of_pswds);
    }

    gen_n_times();
    
    //Log other generated passwords in array
    arr_of_pswds.length > 0 ? console.log(arr_of_pswds[arr_of_pswds.length - 1]) : `arr_of_pswds`;

    modal.getElementsByClassName.visibility = 'visible';

}
