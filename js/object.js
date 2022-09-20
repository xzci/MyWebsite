var human = {
  gender:"male",
  _age:16,
  
  get getAge() {
    return this._age;
  },

  set setAge(newAge) {
    this._age = newAge;
  },

  funways:function(value) {
    this._age = value;
  }
};

document.write(`age is ${human.age} <br>`)
document.write(`gender is ${human.gender} <br>`)

human.setAge = 20

document.write(`human.setAge(20) <br>`)
document.write(`human.getAge is ${human.getAge} <br>`)


human.funways(200)

document.write(`funways(200) <br>`)
document.write(`human.getAge is ${human.getAge} <br>`)


var i = getElementById("d")

