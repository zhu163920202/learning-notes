var obj = {
  name: 'lucky',
  age: 12,
  grade: 90
}
// var arr = Object.keys(obj)
// console.log(arr)
// obj.sex = "female";
// Object.defineProperty() 定义新属性或修改原有的属性
Object.defineProperty(obj, 'num', {
  value: 100,
  enumerable: true, //允许遍历
  writable: false, //不允许修改这个属性值
  configurable: false, //不允许删除这个属性
})
console.log(obj) //{ name: 'lucky', age: 12, grade: 90, num: 100 }