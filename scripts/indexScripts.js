var form = document.getElementById('form');
var submit = document.getElementById('submit');
var userNumber = 0;
var userList = {};
var editState = false;
var editUserId = 0;

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
    NameValidation(this.name);

    if (CPFValidation(this.cpf) == false) {
      window.alert('CPF Inválido')
      throw new Error('CPF Inválido');
    } else this.cpf = CPFValidation(this.cpf);

    BirthValidation(this.birth);

    AgeValidation(this.age);

    if (LocationValidation(this.state) == false) {
      window.alert('Estado Inválido')
      throw new Error('Estado Inválido');
    }

    if (LocationValidation(this.city) == false) {
      window.alert('Cidade Inválida')
      throw new Error('Cidade Inválida');
    }
  }

  editUser(userNumber) {
    form.elements['name'].value = this.name;
    form.elements['cpf'].value = this.cpf;
    form.elements['birth'].value = this.birth;
    form.elements['state'].value = this.state;
    searchCity(this.state);
    document.getElementById('city').value = this.city;

    editState = true;
    editUserId = userNumber;
  }

  deleteUser(userNumber) {
    var line = document.getElementById(`user${userNumber}`);
    delete userList[userNumber]
    line.remove();
  }
}

submit.addEventListener("click", function (e) {
  e.preventDefault();

  var name = form.elements['name'].value;
  var cpf = form.elements['cpf'].value;
  var birth = form.elements['birth'].value;
  var age = getAge(birth);
  var state = form.elements['state'].value;
  var city = form.elements['city'].value;

  if (editState == false) {
    var user = new User(name, cpf, birth, age, state, city);

    if (userList.length != 0) {
      for (person in userList) {
        if (userList[person].user.cpf == cpf) {
          window.alert('CPF Já Cadastrado')
          throw new Error('CPF Já Cadastrado');
        }
      }
    }

    user.validator();

    userNumber++;
    var user$userNumber = user;
    user = null;
    userList[userNumber] = { 'user': user$userNumber }

    var table = document.getElementById('table').innerHTML +=
      `<tr class=tableItem id='user${userNumber}'>` +
      `<td class='texts' id='name${userNumber}'>` + user$userNumber.name + "</td>" +
      `<td class='texts' id='cpf${userNumber}'>` + user$userNumber.cpf + "</td>" +
      `<td class='texts' id='birth${userNumber}'>` + user$userNumber.birth + "</td>" +
      `<td class='texts' id='age${userNumber}'>` + user$userNumber.age + "</td>" +
      `<td class='texts' id='state${userNumber}'>` + user$userNumber.state + "</td>" +
      `<td class='texts' id='city${userNumber}'>` + user$userNumber.city + "</td>" +
      `<td class='buttons'><button class='edit' id='edit${userNumber}' onclick='userList[${userNumber}].user.editUser(${userNumber})'><img src='./assets/images/edit.svg'></button></td>` +
      `<td class='buttons'><button class='delete' id='delete${userNumber}' onclick='userList[${userNumber}].user.deleteUser(${userNumber})'><img src='./assets/images/delete.svg'></button></td>` +
      "</tr>"
    document.getElementById('table').innerHTML = table;

  } else {
    var userEdit = userList[editUserId].user

    userEdit.name = name;
    userEdit.cpf = cpf;
    userEdit.birth = birth;
    userEdit.age = age;
    userEdit.state = state;
    userEdit.city = city;

    for (person in userList) {
      if ((userList[person].user.cpf == cpf) && (person != editUserId)) {
        window.alert('CPF Já Cadastrado')
        throw new Error('CPF Já Cadastrado');
      }
    }

    userEdit.validator();

    var table = document.getElementById(`user${editUserId}`).innerHTML =
      `<td class='texts' id='name${editUserId}'>` + userEdit.name + "</td>" +
      `<td class='texts' id='cpf${editUserId}'>` + userEdit.cpf + "</td>" +
      `<td class='texts' id='birth${editUserId}'>` + userEdit.birth + "</td>" +
      `<td class='texts' id='age${editUserId}'>` + userEdit.age + "</td>" +
      `<td class='texts' id='state${editUserId}'>` + userEdit.state + "</td>" +
      `<td class='texts' id='city${editUserId}'>` + userEdit.city + "</td>" +
      `<td class='buttons'><button class='edit' id='edit${editUserId}' onclick='userList[${editUserId}].user.editUser(${editUserId})'><img src='./assets/images/edit.svg'></button></td>` +
      `<td class='buttons'><button class='delete' id='delete${editUserId}' onclick='userList[${editUserId}].user.deleteUser(${editUserId})'><img src='./assets/images/delete.svg'></button></td>`

    editState = false;

  }
  form.reset()
});