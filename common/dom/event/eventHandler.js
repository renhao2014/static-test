function EventHandler(name){
	
	this.attr1=name;
	this.config={
		clickHandler:function(){
			console.log('not register listener yet');
		}
	};
}

EventHandler.prototype={
	constructor:EventHandler,
	_clickHandler:function(){
		console.log("do something com self~")
		var attr1=this.attr1;
		console.log(attr1);
		//如果想要自身在全局中可以访问，需要把自己（eventHandler对象）暴露出去
		eventHandler.config.clickHandler();
		consol.log()
	}
}


