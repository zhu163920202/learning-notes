var data = [
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
  },
  {
    id: 2,
    name: 'foods',
    content: [
      {
        id: 21,
        name: 'fruit',
        content: [
          {
            id: 211,
            name: 'banana'
          },
          {
            id: 212,
            name: 'apple'
          }
        ]
      }
    ]
  }
];

function getId(target, id) {
  var o = {};
  target.forEach( function (item) {
    if (item.id === id) {
      o = item;
    } else if (item.content && item.content.length > 0) {
      o = getId(item.content, id);
    }
  })
  return o;
}

console.log(getId(data, 212));