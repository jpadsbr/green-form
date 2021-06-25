function NameValidation(name) {
  if (name == '') return false;
}

function CPFValidation(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf == '') return false;

  if (cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999")
    return false;

  add = 0;
  for (i = 0; i < 9; i++)
    add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
    rev = 0;
  if (rev != parseInt(cpf.charAt(9)))
    return false;

  add = 0;
  for (i = 0; i < 10; i++)
    add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
    rev = 0;
  if (rev != parseInt(cpf.charAt(10)))
    return false;

  return true;
}

function BirthValidation(birth) {
  if (birth.length != 10) {
    return false;
  }

  var parts = birth.split("/");

  if ((parts[0] > 31) || (parts[0] < 1)) {
    return false;
  }

  if ((parts[1] > 12) || (parts[1] < 1)) {
    return false;
  }

  if ((parts[1] == 02) & (parts[0] > 29)) {
    return false;
  }
}

function AgeValidation(age) {
  if (age < 1) {
    return false;
  }
}

function LocationValidation(location) {
  if (location == "Selecione") {
    return false;
  }
}