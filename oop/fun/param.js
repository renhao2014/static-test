
//对于参数的疑惑
//参数传递与获取  没有进行参数类型和数量检查
function fun2(name,age){
	console.log(arguments.length+" "+name+" "+age);
	//参数从第0个开始
	$.each(arguments,function(index,item){
		console.log(index+" :"+item);
	});
}

fun2();
//0 undefined undefined
console.log("----------------");

fun2('tom');
//1 tom undefined
console.log("----------------");

fun2('tom',18);
//2 tom 18
console.log("----------------");

fun2('tom',18,'abc');
//3 tom 18
//通过arguments[3]可以拿出'abc'

//可以这样理解js传参
//参数实际上是以arguments数组形式传入
//内部实际上是以arguments[i]来取参的，替换了原来的参数名称。

//在内部除了能够拿到方法参数arguments外，
//还可以通过this拿到当前执行该方法的对象。