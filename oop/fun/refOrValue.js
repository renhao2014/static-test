//传值还是传引用
/**
 * 结论：
 * 无论是方法参数还是直接赋值
 * 对于数值和字符串，都是传值
 * 对于对象，是传递引用
 */

var i=1;
var str='aaa';
var o=new Object();
o.name='tom';
function changeNum(n){
	n=2;
}
changeNum(i);
console.log(i);//1

function changeStr(s){
	s='bbb';
}
changeStr(str);
console.log(str);//aaa

function changeObject(object){
	object.name='jack';
}
changeObject(o);
console.log(o.name);//jack

var i1=i;
i1=3;
console.log(i);//1

var str1=str;
str1='ccc';
console.log(str);//aaa

var o1=o;
o1.name='charry';
console.log(o.name);//charry


