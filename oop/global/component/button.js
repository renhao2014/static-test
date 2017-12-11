//组件的作用是什么
/**
 * 以组件为单位，而不再是以标签为单位，进行了一定封装，控制内部复杂度的暴露程度；
 * 组件不仅包括了UI元素，还有事件及其行为，作为一个完整的对象呈现出来，实现了模块化。
 */

function Btn() {
	this.container;
	//可以暴露，也可以不暴露
	this.config = {
		attr1: '',
	};
	this.button;
	Btn.BUTTON_ID=10000;
}

Btn.prototype = {
	constructor: Btn,
	changeColor: function(color) {
		console.log(this.container.attr('name'));
	},
	_clickHandler:function(){
		console.log("do something component self~");
		this.config.clickHandler();
	},
	init:function(containger, config) {
		console.log("init");
		this.container = $(containger);
		this.config = config;

		//对配置做一些初始化处理
		if(config.buttonId == null) {
			config.buttonId = "button_" + Btn.BUTTON_ID;
			Btn.BUTTON_ID = Btn.BUTTON_ID+1;
			console.log("buttonId:" + config.buttonId);
		}

		//在容器内构件UI组件
		var htmlStr = new String();
		htmlStr = htmlStr +
			"<input type='button'" +
			"name='" + config.buttonName + "'" +
			"id='" + config.buttonId + "'" +
			"value='button1' class='buttonClass'/>";
		this.container.append($(htmlStr));
		this.button = $(container + " [type='button']");

		//分析config中动态配置
		//click事件注册，中间可以加入组件自身的处理
		if(this.config && this.config.clickHandler) {
			
			$("#"+config.buttonId).on('click', this._clickHandler);
		}
		//注册事件
	}

}