function fn(str) {
  var str = str;
  while (str[0] == ' ') {
    str = this.substr(1)
  }
  while(str[str.length - 1] == ' ') {
    str = this.substr(0, str.length-1)
  }
  return str;
}

var s1 = '    qwe   ';
console.log(s1)
console.log(fn(s1))