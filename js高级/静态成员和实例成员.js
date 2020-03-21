function Star(name, age) {
  this.name = name;
  this.age = age;
  // this.sing = function() {
  //   console.log('this is song')
  // }
}
// 通常将公用的属性定义到构造函数内，公用的方法放到原型对象身上
Star.prototype.sing = function() {
  console.log('this is song')
}

var lucky = new Star('lucky', 19);
// console.log(lucky.age);
lucky.sing();
Star.sex = 'male'
// console.log(Star.prototype === lucky.__proto__)
console.log(Star.prototype.__proto__ === Object.prototype)

// console.log(Star.sex)
// console.log(lucky.sex) // undefined 静态成员：在构造函数本身添加的成员，只能通过构造函数来访问