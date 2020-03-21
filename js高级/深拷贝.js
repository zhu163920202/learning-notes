var data = 
  {
    id: 1,
    name: 'books',
    content: [
      {
        id:11,
        name: 'ebooks',
        content: [
          {
            id: 111,
            name: 'little king'
          }, 
          {
            id: 112,
            name: 'queen'
          }
        ]
      }
    ]
  };
var o = {};
 function deepCopy(target, source) {
   for (var k in source) {
     var item = source[k];
     if (item instanceof Array) {
       target[k] = [];
       deepCopy(target[k], item);
     } else if (item instanceof Object) {
      target[k] = {};
      deepCopy(target[k], item);
     } else {
       target[k] = item
     }
   }
 }
 deepCopy(o, data)
 console.log(o)