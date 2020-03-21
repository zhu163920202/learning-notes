class Father {
  constructor(x, y) {
    this.x  = x;
    this.y = y;
  }
  sum() {
    return this.x + this.y
  }
}
class Son extends Father {
  constructor(x, y) {
    super();
    // super()调用父类的构造函数，必须在子类this之前调用
    this.x = x;
    this.y = y;
  }
  substract() {
    return this.x - this.y;
  }
}
var test = new Son(1, 3);
console.log(test.sum())
console.log(test.substract())