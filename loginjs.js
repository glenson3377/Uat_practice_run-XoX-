// all js code for my login page here
function verify(){
    console.log("function called, variables recognised");
    var players = document.getElementById("players").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    var common = username + " " + password
    if (common.length > 40 || common.length < 2){ // if my var common is longer than 2 or shorter than 40
        console.log('fist invalid condition met(username too long or short)');
        document.getElementById('status').innerHTML = "Invalid Login, try again";
    }else{
        if (players > 200 || players < 2){ // but if the number of players is not between 2 and 20
            document.getElementById('status').innerHTML = "Too many/too liitle players try again";
            console.log('second condition met(invalid player count)');
        }else{
            console.log('login condition met moving to next page'); //if the above conditions are false display the alert and change the page
            alert('Login successful, Welcome  ' + username + ' ' + password + '.');
            location.replace('counter.html');
        }
    }
}