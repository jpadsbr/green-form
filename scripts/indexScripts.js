var form = document.getElementById('form');
var submit = document.getElementById('submit');
var userNumber = 0;
var userList = {};

class User {
  constructor(name, cpf, birth, age, state, city) {
    this.name = name;
    this.cpf = cpf;
    this.birth = birth;
    this.age = age;
    this.state = state;
    this.city = city;
  }

  validator() {
    if (NameValidation(this.name) == false) {
      throw new Error('Nome Inválido');
    }

    if (CPFValidation(this.cpf) == false) {
      throw new Error('CPF Inválido');
    } else this.cpf = CPFValidation(this.cpf);

    if (BirthValidation(this.birth) == false) {
      throw new Error('Data de Nascimento Inválida');
    }

    if (AgeValidation(this.age) == false) {
      throw new Error('Data de Nascimento Inválida');
    }

    if (LocationValidation(this.state) == false) {
      throw new Error('Estado Inválido');
    }

    if (LocationValidation(this.city) == false) {
      throw new Error('Cidade Inválida');
    }
  }

  editUser(userNumber) {
    console.log('edit' + userNumber)
  }

  deleteUser(userNumber) {
    console.log('delete' + userNumber)

    var line = document.getElementById(`user${userNumber}`);

    delete userList[userNumber]
    console.log(userList)
    line.remove();
  }
}

submit.addEventListener("click", function (e) {
  e.preventDefault();

  var name = form.elements['name'].value;
  var cpf = form.elements['cpf'].value;
  var birth = form.elements['birth'].value;
  var age = getAge(getDate(), birth)
  var state = form.elements['state'].value;
  var city = form.elements['city'].value;
  var user = new User(name, cpf, birth, age, state, city);

  user.validator();

  userNumber++;
  var user$userNumber = user;
  userList[userNumber] = { 'user': user$userNumber }

  var table = document.getElementById('table').innerHTML;
  table += `<tr class=tableItem id='user${userNumber}'>` +
    "<td class='texts'>" + user$userNumber.name + "</td>" +
    "<td class='texts'>" + user$userNumber.cpf + "</td>" +
    "<td class='texts'>" + user$userNumber.birth + "</td>" +
    "<td class='texts'>" + user$userNumber.age + "</td>" +
    "<td class='texts'>" + user$userNumber.state + "</td>" +
    "<td class='texts'>" + user$userNumber.city + "</td>" +
    `<td class='buttons'><button class='edit' id='edit${userNumber}' onclick='userList[${userNumber}].user.editUser(${userNumber})'><img src='./assets/images/edit.svg'></button></td>` +
    `<td class='buttons'><button class='delete' id='delete${userNumber}' onclick='userList[${userNumber}].user.deleteUser(${userNumber})'><img src='./assets/images/delete.svg'></button></td>` +
    "</tr>"
  document.getElementById('table').innerHTML = table;

  console.log(userList);

  form.reset()
});