class Star {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting(name) {
    console.log("good morning " + name);
  }
}

var hi = new Star('hi', 12);
console.log(hi.name)
hi.greeting('na')

// 类的继承
class Person1 extends Star {
  singing() {
    console.log('this is song');
  }
}
var li = new Person1()
li.greeting("zhe")

// const first = [18, 19, 20];
// const second = first.reduce((aggregate, item) => aggregate+item, 0);
// console.log(second)