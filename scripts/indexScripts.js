var form = document.getElementById('form');
var submit = document.getElementById('submit');

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return [dd, mm, yyyy];
}

function getAge(currentDate, birth) {
  birthSplitted = birth.split('/')
  age = currentDate[2] - birthSplitted[2]
  if (currentDate[1] < birthSplitted[1] || currentDate[1] == currentDate[1] && currentDate[0] < birthSplitted[0]) {
    age--;
  }

  return age;
}

submit.addEventListener("click", function (e) {
  e.preventDefault();

  var table = document.getElementById('table').innerHTML;

  var name = form.elements['name'].value;
  if (NameValidation(name) == false) {
    throw new Error('Nome Inválido');
  }

  var cpf = form.elements['cpf'].value;
  if (CPFValidation(cpf) == false) {
    throw new Error('CPF Inválido');
  }

  var birth = form.elements['birth'].value;
  if (BirthValidation(birth) == false) {
    throw new Error('Data de Nascimento Inválida');
  }

  var age = getAge(getDate(), birth)
  if (AgeValidation(age) == false) {
    throw new Error('Data de Nascimento Inválida')
  }

  var state = form.elements['state'].value;
  if (LocationValidation(state) == false) {
    throw new Error('Estado Inválido');
  }

  var city = form.elements['city'].value;
  if (LocationValidation(city) == false) {
    throw new Error('Cidade Inválida')
  }

  table += "<tr><td>" + name + "</td><td>" + cpf + "</td><td>" + birth + "</td><td>" + age + "</td><td>" + state + "</td><td>" + city + "</td></tr>"
  document.getElementById('table').innerHTML = table;

  form.reset()

});