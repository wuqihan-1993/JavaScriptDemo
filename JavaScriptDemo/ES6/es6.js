'use strict';

// 1.let
/*
1.let 用于代码块{}中。作用域为代码块 之前的var作用域只有函数
2.let 不可以重复声明。 var 重复声明就会覆盖。let是报错。不能重复声明
总结：其实let才接近其他语言的变量
*/
{
	let a = 12;
	var b = 10;
}
// console.log(a); //报错
console.log('b='+b);//因为b的作用域是函数 而不是代码块，所以可以打印出来

// 2.const
/* 用来定义常量，一旦赋值，以后不可改变
	声明的时候，必须同时赋值，不能先声明，后赋值。
*/

// 3.字符串连接
let hello = '你好';
let world = '世界'
let str = `asdfsd${hello}fsdf${world}dsfdsfdsfdf`;
console.log(str);

// 4.解构赋值
// 4.1 结构赋值给默认值：使用=

// 5.复制数组
/*
	//不能直接=，呢样复制的是指针
	a)循环
	b)Array.from(arr)
	c)var arr2 = [...arr];

	// ... 其他用法：
	function show(...args) {
		//args 是数组，函数中的arguments不是数组，不能是用push等数组对象的方法
		args.push(5);
		console.log(args);
	}
*/

// 6.for of循环
var fruits = ["apple","orange","banana","pear"];
for(let i in fruits) {//还可以循环JSON
	console.log(i);
}
for(let i of fruits) {//不可以循环JSON ，真正的目的是为了循环Map对象
	console.log(i);
}
//Map 和JSON相似，也是一种键值对
var map = new Map();
map.set('a','apple');
map.set('b','banana');
map.set('c','orange');
map.delete('c');
console.log(map);
console.log(map.get('a'));//Map获取是用get()

// for in 不支持Map
// for (let item in map) {
// 	console.log(map);
// }
for (let item of map) {
	console.log(item);
	console.log(item[0]);
}
for (var [key,value] of map) {
	console.log(key,value); //node —harmony_destructuring es6.js 需要用这个命令行运行
}
//以上的本质是循环map的entries()
for (let item of map.entries()) {
	console.log(item);
}
for (let key of map.keys()){//同时也有values()
	console.log(key);
}

var books = ["红楼梦","三国演义","水浒传","西游记"];
for (value of books.keys()) { //arr 用forof 的话只有values
	console.log('books:'+value);
}

// 7.函数
/*
=> 函数格式越来越简单
*/

































//end
