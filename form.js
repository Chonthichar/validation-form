
function send() {
  const emailForm = document.getElementById('email').value;
  const passwordForm = document.getElementById('password').value;
  console.log(emailForm, passwordForm);

  const email = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

  if (!emailForm.match(email)) {
    alert("Email are in valid");
    return false;
  } else if (emailForm.match(email)) {
    document.getElementById('texts').innerHTML = 'success';
    return true;}
  }




