email = document.querySelector("#email").val()
function validarEmail(email) {
    // Expressão regular para validar o formato do email
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    // Testa se o email corresponde à expressão regular
    return regex.test(email);
}