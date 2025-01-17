var name = 'window'

function Person (name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() // 独立调用: window
person1.obj.foo1.call(person2)() // 独立调用: window
person1.obj.foo1().call(person2) // 显式绑定: person2

person1.obj.foo2()() // 箭头函数不绑定this, 外层作用域是隐式绑定: obj
person1.obj.foo2.call(person2)() // 箭头函数不绑定this, 外层作用域是显式绑定: person2
person1.obj.foo2().call(person2) // 箭头函数不绑定this, 外层作用域是隐式绑定: obj