//for(var i = 0; i < 10; i++) {
//	var a=i;
//    setTimeout(function(a) {
//        console.log(a);
//    }, 1000);
//}

function Btn() {
	this.name1 = 'name1';
	this.config = {

	};
	var name2='name2';

	this.init1= function init1(){
		console.log(this.name1);
		
		console.log(name2);
		console.log(name1);
	}

}

Btn.prototype = {
	constructor: Btn,
	_clickHandler: function(config) {
		console.log('do something com self');
		config.clickHandler();
	},
	init: function() {
		console.log('init');
		console.log(this.name1);
//		console.log(name2);
		var config=this.config;
		var _clickHandler=this._clickHandler;
		$('#button1').on('click', function() {
			//console.log(this.name1);
			_clickHandler(config);
		})


	}
}


//function main(){
//	var options={
//		name:'tom',
//	}
//	$('#button1').on('click',function(){
//		console.log(options.name);
//	});
//}


//			var btn = new Btn();
//			//定义了一个方法，方法中访问了外部变量，闭包？
//			btn.config.clickHandler=function(){
//				console.log('click');
//				console.log("get access to outer："+btn.name1);
//			}
//			btn.init();
//			btn.init1();
//			main();