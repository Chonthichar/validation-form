function emails() {
    const emailForm = document.getElementById('email').value;
    const email = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    if (!emailForm.match(email)) {
        alert("Email are in valid");
        return false;
    } else if (emailForm.match(email)) {
        document.getElementById('texts').innerHTML = 'success';
        return true;
    }
}

function passwords() {
    const passwordForm = document.getElementById('password').value;
    if (passwordForm.length < 8) {
        document.getElementById('message').innerHTML = 'Password length must be between at least 8 characters';
        return false;

    } else if (passwordForm.length > 15) {
        document.getElementById('messages').innerHTML = 'Password length must not over 15 charecters';
        return false;
    } else {
        document.getElementById('messagess').innerHTML = 'Password correct';
        return true;
    }
}

function send() {
    const emailForm = document.getElementById('email').value;
    const passwordForm = document.getElementById('password').value;
    console.log(emailForm, passwordForm);
}

function dataReset() {
    document.getElementById('form').reset();
}

