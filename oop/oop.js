function Cat() {
	
	
	//公有属性
	this.feature='eat';
	this.containger;
	this.config;
	//公共方法
	this.eat = function() {
		console.log("eat1");
	};
	//初始化
	this.init=function(container,config){
		console.log("init---");	
		this.container=container;
		this.config=config;
		//do something else
	};

	//私有属性
	var var_name='var_name';
	//私有方法
	function private_eat(){};
	

	//静态方法
	Cat.swim=function(){
		console.log('static function');
	}
	//静态属性
	Cat.staticAttr='staticAttr';
	
	//构造方法
	//比如给容器添加回调事件之类的
}

//原型属性  和静态方法/属性一样的？
//不一样，他可以访问非静态属性和方法，但又是全局的。
//调用时直接使用play就可以
Cat.prototype={
	constructor: Cat,
	type: 'cat',
	play: function() {
		console.log(this.feature);//ok
		console.log(var_name);//undefined 在this.play方法中才能访问var变量
		
		console.log("play1");
	}
};



function oopTest() {
//	//测试用this标注的公有属性是否会互相影响（结论：不会）
	var cat_tom = new Cat();
//	cat_tom.feature = 'run';
//	var cat_jack = new Cat();
//	cat_jack.feature = 'sleep';
//	//两者输出内容不同
//	console.log(cat_tom.feature);//run
//	console.log(cat_jack.feature);//sleep
//	
//	
//	
//	//测试prototype下属性是否会互相影响（结论：会）
//	//属性  必须通过构造来修改prototype属性
//	//两者输出内容不同
//	console.log(cat_tom.type);
//	Cat.prototype.type='dog';
//	console.log(cat_jack.type);
//	
//	
//	
//	//测试prototype下方法是否会互相影响（结论：会）
//	//两者输出内容不同
//	cat_tom.play();
//	Cat.prototype.play = function() {
//		console.log("play2");
//	};
//	cat_jack.play();	
//	
//	
//	//测试公共方法是否可临时修改(结论：不可以)
//	cat_tom.eat();//eat1
//	Cat.eat = function() {
//		console.log("eat2");
//	};
//	cat_jack.eat();//eat1
//	cat_charry=new Cat();
//	cat_charry.eat();//eat1
//	
//
//	//测试是否能够加入除对象构造之外的属性(结论：可以)
//	cat_tom.extendAttr='extend';
//	console.log(cat_tom.extendAttr);
//	
//
//	//测试能否通过对象访问内部var定义的变量(结论：不能)
//	console.log(cat_tom.var_name);//undefined
//	
//	
//	//测试静态属性、方法（结论：可以临时修改）
//	Cat.swim();
//	console.log(Cat.staticAttr) ;
//	Cat.swim=function(){
//		console.log("changed") ;
//	}
//	Cat.swim();
	
}

oopTest();

//layUi实战
//var Lay=function(){};
//Lay.fn = Lay.prototype;
//Lay.fn.fun1=function(){
//	console.log("fun1");
//}
//layui=new Lay();
//layui.fun1();



//var testObject=new Object();
//testObject.name="tom";
//testObject.age=18;
//console.log(testObject['name']);
//console.log(testObject.name);




