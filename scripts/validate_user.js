//retrieve info from DOM
let user_name = document.querySelector('#email');
let password_input = document.getElementById("password");
let password_button = document.getElementById("loginBtn");
let alert_modal = document.querySelector('#alert_modal');
//let passWordStatus = document.getElementById("message-core");
let close_button = document.querySelector('#close-button');

//for close button
close_button.addEventListener('click', function (event) {
    event.preventDefault();

    alert_modal.style.visibility = 'hidden';

})

//user info as may be stored in database
let user = {
    name: "CJ",
    username: "igwe505",
    password: "igwe2021",
    email: "igwe@cj.com",
};

//function to check user password

password_button.addEventListener('click', function () {
    if (password_input.value === user.password && (user_name.value === user.name || user_name === user.username)) {
        alert_modal.style.visibility = 'visible';
        passWordStatus.textContent = `SUCCESS!! LOGGING IN...`;
        return true;
    } else {
        /* BLOCK OF CODE TO SEND WRONG PASSWORD TO DESIGNATED MAIL */

        alert_modal.style.visibility = 'visible';
        passWordStatus.textContent = `ERROR!! WRONG PASSWORD`;
        return false;
    }
});


//THIS CODE BELOW WAS CAUSING THE ISSUE, IT WASN'T WRITTEN WELL
/*
password_button.addEventlistener('click', function () {    
    if (passwordDiv.value === user.password) {
        return (passWordStatus.innerHTML = `SUCCESS!! logging in...`);
    } else {
        //--- Block of code that sends the wrong password to a database ---

        return (passWordStatus.innerHTML = `ERROR!! wrong password`);
    }
});
*/

