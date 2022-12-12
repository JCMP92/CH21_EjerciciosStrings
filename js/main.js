// Validación -------------------------------------------------------------------------------------------
let btnSend = document.getElementById('sendBtn');

btnSend.addEventListener('click', function (e) {
  e.preventDefault();
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let inputMail = document.getElementById('exampleInputEmail1');
  let inputPass = document.getElementById('exampleInputPassword1');
  let alert = document.getElementById('alert');
  alert.style.display = 'none';
  if (inputPass.value.trim().replaceAll('  ', '').length < 20) {
    alert.innerHTML = 'DEBEN SER MAS DE 20 CARACTERES';
    alert.style.display = 'block';
    inputPass.focus();
    inputPass.select();
  }
  if (inputMail.value.match(emailRegex) == null) {
    alert.innerHTML += '<br/>CORREO INVÁLIDO';
    alert.style.display = 'block';
  }
});
