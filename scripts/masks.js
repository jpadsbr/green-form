function verifyNaN(field, value) {
  if (isNaN(value[value.length - 1])) {
    field.value = value.substring(0, value.length - 1);
    return;
  }
}

function CPFMask(cpf) {
  var value = cpf.value;

  verifyNaN(cpf, value);

  cpf.setAttribute("maxlength", "14");
  document.addEventListener('keydown', function (event) {
    if (event.keyCode != 46 && event.keyCode != 8) {
      var i = cpf.value.length;
      if (i === 3 || i === 7)
        cpf.value = cpf.value + ".";
      else if (i === 11)
        cpf.value = cpf.value + "-";
    }
  });
}

function BirthMask(birth) {
  var value = birth.value;

  verifyNaN(birth, value);

  birth.setAttribute("maxlength", "10");
  document.addEventListener('keydown', function (event) {
    if (event.keyCode != 46 && event.keyCode != 8) {
      var i = birth.value.length;
      if (i === 2 || i === 5)
        birth.value = birth.value + "/";
    }
  });
}