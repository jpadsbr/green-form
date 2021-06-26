function NameValidation(name) {
  if (name == '') {
    window.alert('Nome Inválido')
    throw new Error('Nome Inválido');
  }
}

function CPFValidation(cpf) {
  function verifyDigit(digit) {
    add = 0;
    for (i = 0; i < digit; i++)
      add += parseInt(cpf.charAt(i)) * (digit + 1 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(digit)))
      return false;
    return true;
  }

  cpf = cpf.replace(/\D/g, "");

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

  if (!verifyDigit(9) || !verifyDigit(10)) return false;

  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

  return cpf;
}

function BirthValidation(birth) {
  function isDayValid(day) {
    return (day <= 31 && day >= 1)
  }
  function isMonthValid(month) {
    return (month <= 12 && month >= 1)
  }
  function isFebruaryValid(day, month) {
    if (month == 2) {
      return day < 29
    } else return true;
  }

  var parts = birth.split("/");
  if (birth.length != 10) {
    window.alert('Data de Nascimento Inválida')
    throw new Error('Data de Nascimento Inválida');
  } else if (!isDayValid(parts[0]) || !isMonthValid(parts[1]) || !isFebruaryValid(parts[0], parts[1])) {
    window.alert('Data de Nascimento Inválida')
    throw new Error('Data de Nascimento Inválida');
  }
}

function AgeValidation(age) {
  if (age < 1) {
    window.alert('Data de Nascimento Inválida')
    throw new Error('Data de Nascimento Inválida');
  }
}

function LocationValidation(location) {
  if (location == "Selecione") {
    return false;
  }
}

function getAge(birth) {
  function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return [dd, mm, yyyy];
  }

  currentDate = getDate();
  birthSplitted = birth.split('/')
  age = currentDate[2] - birthSplitted[2]
  if (currentDate[1] < birthSplitted[1] || currentDate[1] == birthSplitted[1] && currentDate[0] < birthSplitted[0]) {
    age--;
  }
  return age;

}