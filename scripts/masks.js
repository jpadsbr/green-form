function verifyNumDigits(field, value) {
  if (isNaN(value[value.length - 1])) {
    field.value = value.substring(0, value.length - 1);
    return;
  }
}

function CPFMask(cpf) {
  var value = cpf.value;

  verifyNumDigits(cpf, value);

  cpf.setAttribute("maxlength", "14");
  if (value.length == 3 || value.length == 7) cpf.value += ".";
  if (value.length == 11) cpf.value += "-";
}

function BirthMask(birth) {
  var value = birth.value;

  verifyNumDigits(birth, value);

  birth.setAttribute("maxlength", "10");
  if (value.length == 2 || value.length == 5) birth.value += "/";
}