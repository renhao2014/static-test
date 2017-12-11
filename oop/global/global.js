//全局对象
//浏览器全局对象

//js全局对象
//Infinity	代表正的无穷大的数值。
//java	代表 java.* 包层级的一个 JavaPackage。
//NaN	指示某个值是不是数字值。
//Packages	根 JavaPackage 对象。
//undefined	指示未定义的值。

//js全局方法
//decodeURI()	解码某个编码的 URI。
//decodeURIComponent()	解码一个编码的 URI 组件。
//encodeURI()	把字符串编码为 URI。
//encodeURIComponent()	把字符串编码为 URI 组件。
//escape()	对字符串进行编码。
//eval()	计算 JavaScript 字符串，并把它作为脚本代码来执行。
//getClass()	返回一个 JavaObject 的 JavaClass。
//isFinite()	检查某个值是否为有穷大的数。
//isNaN()	检查某个值是否是数字。
//Number()	把对象的值转换为数字。
//parseFloat()	解析一个字符串并返回一个浮点数。
//parseInt()	解析一个字符串并返回一个整数。
//String()	把对象的值转换为字符串。
//unescape()	对由 escape() 编码的字符串进行解码。

//打印出一个最简单页面中的全局对象（包括js和dom的）：
//不一一列举了，记录几条典型的  具体打印见最下方
//for (var name in this) 
//{
//	console.log(name);
//}

for(var index in document.scripts) {
	console.log(index + ":" + document.scripts[index]);
}

var doc = document,

	//获取layui所在目录
	getPath = function() {
		var js = doc.scripts,
			jsPath = js[js.length - 1].src;
		console.log("src:" + js[js.length - 1].src)
		return jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
	}();

//var x=Math.PI;
//console.log(x);

//chrome
//document
//caches
//localStorage
//sessionStorage
//blur
//focus
//close
//onbeforeunload
//onvolumechange
//onsubmit
//onclick
//console
//navigator
//frameElement
//parent
//top
//frames
//toolbar
//history
//location
//self
//window
//open
//alert
//confirm
//find
//setTimeout
//setInterval
//scrollTo
//webkitRequestFileSystem
//addEventListener
//dispatchEvent