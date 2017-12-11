/**
 * form相关方法(easyui定制版)
 * 依赖于jquery
 * author:chenrenhao
 */
var FormUtil={
	test:function(){
		console.log("test");
	},
	/**
	 * 从form读取数据(可用,填补了easyui-form读取工具的空白)
	 * @param container
	 * @param obj 用来对key采样并接受采样数据
	 */
	getDataFromForm:function(container,obj){
		for(key in obj){
			var tagSelect=container+" [name='"+key+"']";
			//在子容器中寻找是否有符合该name名称的标签
			if($(tagSelect).length!=0){
				console.log("get tag match: "+tagSelect);
				console.log("tagType:"+$(tagSelect)[0].type);
				if($(tagSelect)[0].type=="hidden"){
					obj[key]=$(tagSelect).val();
				}else if($(tagSelect)[0].type=="radio"){
					obj[key]=$(tagSelect+":checked").val();
					console.log("radio:"+obj[key]);
				}
				
				
				continue;
			}else{
				console.log("no tag match "+tagSelect);
			}
		}
		return obj;
	},
	
	
	
	/*
	 * 目前在列表页面写值还有问题，不清楚为什么值设置不进去,
	 * 目前可以直接使用easy提供的form注入工具
	 * 目前支持text...标签
	 * container: 限定在容器内搜索 #id
	 * data:{}
	 * suffix 标签后缀 eg id="nameAdd"
	 */
	setDataToForm:function(container,obj){
		for(key in obj){
			var tagSelect=container+" [name='"+key+"']";
			//在子容器中寻找是否有符合该name名称的标签
			if($(tagSelect).length!=0){
				console.log("get tag match: "+tagSelect);
				$(tagSelect).val(obj[key]);
				continue;
			}else{
				console.log("no tag match "+tagSelect);
			}
		}
	},
	
}












