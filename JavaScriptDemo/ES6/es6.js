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
