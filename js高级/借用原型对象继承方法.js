function Father(name, age) {
  this.name = name;
  this.age = age;
}
Father.prototype.sing = function() {
  console.log('this is song')
}
function Son(name, age, score) {
  Father.call(this, name, age);
  this.score = score;
}
// 如果用对象的形式修改原型对象，则要用constructor指回原来的构造函数
// Son.prototype = new Father();
// Son.prototype.constructor = Son;

var son = new Son('lucky', 12);
console.log(son.age)

