
    var email = document.getElementById('form3Example3');
    var password = document.getElementById('form3Example4');
    var form = document.getElementById('form');

    var allusers = JSON.parse(localStorage.getItem('users'));
    var userFound = false;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (allusers==[]) {
            return alert('No users found');
        }
        for (var i = 0; i < allusers.length; i++) {
            if (allusers[i].email === email.value && allusers[i].password === password.value) {
                userFound = true;
                window.location.href = '../main-page/main.html';
                break;
            }
        }

        if (!userFound) {
        
            alert('Invalid email or password');
        }
    });

