      // 倒计时效果
        // 1.核心算法：输入的时间减去现在的时间就是剩余的时间，即倒计时 ，但是不能拿着时分秒相减，比如 05 分减去25分，结果会是负数的。
        // 2.用时间戳来做。用户输入时间总的毫秒数减去现在时间的总的毫秒数，得到的就是剩余时间的毫秒数。
        // 3.把剩余时间总的毫秒数转换为天、时、分、秒 （时间戳转换为时分秒）

function timer(time) {
  var now = +new Date();
  var inputTime = +new Date(time);
  var res = inputTime - now;  // 倒计时剩余的毫秒数
  var d = parseInt(res/1000/60/60/24);
  d = parse(d)
  var h = parseInt(res/1000/60/60%24);
  h = parse(h);
  var m = parseInt(res/1000/60%60);
  m = parse(m);
  var s = parseInt(res/1000%60);
  s = parse(s)
  return  d +'天'+ h + '时'+ m +'分' + s+ '秒';
}

function parse(value) {
  return value < 10?'0'+value:value;
}

console.log(timer('2020-12-24 11:00:00'))
