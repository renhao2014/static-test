/**
 * form相关方法
 * 依赖于jquery
 * author:chenrenhao
 */
var FormUtil={
	test:function(){
		console.log("test");
	},
	
	/**
	 * 根据标签类型写入数据
	 * 支持text,radio,select,checkbox(多值以逗号分隔)
	 * 后续添加textarea支持
	 * @param tagSelect
	 * @param tagType
	 * @param value
	 */
	setDataToTag:function(tagSelect,tagType,value){
		try{
			console.log("tagType: "+tagType);
			if(tagType=="text"){
				$(tagSelect).val(data[key]);
			}else if(tagType=="radio"){
				$(tagSelect+"[value='"+value+"']").attr("checked",true);
			}else if(tagType=="checkbox"){
				var selectValues=value.split(",");
				$.each(selectValues, function(index,item) {
					$(tagSelect+"[value='"+item+"']").attr("checked",true);
				});
			}else if(tagType=="select-one"){
				$(tagSelect).find("option[value='"+value+"']").attr("selected",true);
			}
		}catch(e){
			console.log("data injection error,tagSelect:"+tagSelect);
		}
	},
	/*
	 * 目前支持text...标签
	 * container: 限定在容器内搜索 #id
	 * data:{}
	 */
	setDataToForm:function(container,data){
		for(key in data){
			var tagSelect=container+" [name='"+key+"']";
			//在子容器中寻找是否有符合该name名称的标签
			if($(tagSelect).length!=0){
				console.log("get tag match: "+tagSelect);
				var tagType=$(tagSelect)[0].type;
				FormUtil.setDataToTag(tagSelect,tagType,data[key]);
				continue;
			}else{
				console.log("no tag match "+tagSelect)
			}
		}
	},
	/**
	 * 根据标签类型写入数据
	 * 支持text,radio,select,checkbox(多值以逗号分隔)
	 * 后续添加textarea支持
	 * @param tagSelect
	 * @param tagType
	 * @param value
	 */
	getDataFromTag:function(tagSelect,tagType){
		try{
			console.log("tagType: "+tagType);
			if(tagType=="text"){
				$(tagSelect).val(data[key]);
			}else if(tagType=="radio"){
				$(tagSelect+"[value='"+value+"']").attr("checked",true);
			}else if(tagType=="checkbox"){
				var selectValues=value.split(",");
				$.each(selectValues, function(index,item) {
					$(tagSelect+"[value='"+item+"']").attr("checked",true);
				});
			}else if(tagType=="select-one"){
				$(tagSelect).find("option[value='"+value+"']").attr("selected",true);
			}
			return value;
		}catch(e){
			console.log("data injection error,tagSelect:"+tagSelect);
		}
	},
	/**
	 * 从form读取数据
	 * @param container
	 * @param suffix
	 */
	getDataFromForm:function(container){
		var data={};
		
		return data;
	}

	
}












