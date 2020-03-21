 //  判断一个字符串 'abcoefoxyozzopp' 中出现次数最多的字符，并统计其次数。
        // o.a = 1
        // o.b = 1
        // o.c = 1
        // o.o = 4
        // 核心算法：利用 charAt(） 遍历这个字符串
        // 把每个字符都存储给对象， 如果对象没有该属性，就为1，如果存在了就 +1
        // 遍历对象，得到最大值和该字符

function foo(str) {
  var o = {}
  for (var i=0; i<str.length; i++) {
    var chars = str.charAt(i)
    if (o[chars]) {
      o[chars]++;
    } else {
      o[chars] = 1;
    }
    // return o
  }
  console.log(o)
  var max = 0;
  var ch = ''
  for (var k in o) {
    if(o[k] > max) {
      max = o[k]
      ch = k
    }

  }
  console.log('字符'+ch+'出现次数最多，共'+max+'次')
}

var str = 'abcoefoxyozzopp'
foo(str)