//通用
//根据数据绘制各种页面组件

//根据字典绘制select
function generateSelect(selectId, list, valueName, contentName,label) {
	var selectHtml = new String();
	selectHtml=selectHtml+
	"<div class='layui-form-item'>"+
	"<label class='layui-form-label'>"+label+"</label>"+
		"<div class='layui-input-block' style='width:200px;' id='"+selectId+"Div'>"+
			"<select id='"+selectId+"'>";
				selectHtml = selectHtml +
				"<option value=''></option>";
				for(i = 0; i < list.length; i++) {
				selectHtml = selectHtml +
				"<option value='" + list[i][valueName] + "'>" + list[i][contentName] + "</option>";
				}
				selectHtml=selectHtml+
			"</select>"+
		"</div>"+
	"</div>";		
	return selectHtml;
}


//根据字典 默认值生成select
function generateSelectWithDefault(selectId, list, valueName, contentName,label,defaultValue) {
	var selectHtml = new String();
	selectHtml=selectHtml+
	"<div class='layui-form-item'>"+
	"<label class='layui-form-label'>"+label+"</label>"+
		"<div class='layui-input-block' style='width:200px;' id='"+selectId+"Div'>"+
			"<select id='"+selectId+"'>";
				selectHtml = selectHtml +
				"<option value=''>  </option>";
				for(i = 0; i < list.length; i++) {
				if(list[i][valueName]==defaultValue){
				selectHtml = selectHtml +
				"<option value='" + list[i][valueName] + "' selected>" + list[i][contentName] + "</option>";
				}else{
				selectHtml = selectHtml +
				"<option value='" + list[i][valueName] + "'>" + list[i][contentName] + "</option>";
				}
				}
				selectHtml=selectHtml+
			"</select>"+
		"</div>"+
	"</div>";		
	return selectHtml;
}


//多content select生成
function generateMulContentSelect(selectId, list, valueName, contentNames,label) {
	var selectHtml = new String();
	selectHtml=selectHtml+
	"<div class='layui-form-item'>"+
	"<label class='layui-form-label'>"+label+"</label>"+
		"<div class='layui-input-block' style='width:200px;' id='"+selectId+"Div'>"+
			"<select id='"+selectId+"'>";
				selectHtml = selectHtml +
				"<option value=''></option>";
				for(i = 0; i < list.length; i++) {
				//解析出当前content
				var currentContent='';
				$.each(contentNames,function(index,item){
					currentContent=currentContent+list[i][item]+",";
				});
				currentContent=currentContent.substring(0,currentContent.length-1);
				selectHtml = selectHtml +
				"<option value='" + list[i][valueName] + "'>" + currentContent + "</option>";
				}
				selectHtml=selectHtml+
			"</select>"+
		"</div>"+
	"</div>";		
	return selectHtml;
}

//根据字典 默认值生成select
function generateMulContentSelectWithDefault(selectId, list, valueName, contentNames,label,defaultValue) {
	var selectHtml = new String();
	selectHtml=selectHtml+
	"<div class='layui-form-item'>"+
	"<label class='layui-form-label'>"+label+"</label>"+
		"<div class='layui-input-block' style='width:200px;' id='"+selectId+"Div'>"+
			"<select id='"+selectId+"'>";
				selectHtml = selectHtml +
				"<option value=''>  </option>";
				for(i = 0; i < list.length; i++) {
				//解析出当前content
				//解析出当前content
				var currentContent='';
				$.each(contentNames,function(index,item){
					currentContent=currentContent+list[i][item]+",";
				});
				currentContent=currentContent.substring(0,currentContent.length-1);
				if(list[i][valueName]==defaultValue){
				selectHtml = selectHtml +
				"<option value='" + list[i][valueName] + "' selected>" + currentContent + "</option>";
				}else{
				selectHtml = selectHtml +
				"<option value='" + list[i][valueName] + "'>" + currentContent + "</option>";
				}
				}
				selectHtml=selectHtml+
			"</select>"+
		"</div>"+
	"</div>";		
	return selectHtml;
}


//根据list和默认值生成select
//list直接存储选项，而非object
function generateSelectByListWithDefault(selectId, list,label,defaultValue) {
	var selectHtml = new String();
	selectHtml=selectHtml+
	"<div class='layui-form-item'>"+
	"<label class='layui-form-label'>"+label+"</label>"+
		"<div class='layui-input-block' style='width:200px;' id='"+selectId+"Div'>"+
			"<select id='"+selectId+"'>";
				selectHtml = selectHtml +
				"<option value=''>  </option>";
				for(i = 0; i < list.length; i++) {
				if(list[i]==defaultValue){
				selectHtml = selectHtml +
				"<option value='" + list[i] + "' selected>" + list[i] + "</option>";
				}else{
				selectHtml = selectHtml +
				"<option value='" + list[i] + "'>" + list[i] + "</option>";	
				}
				}
				selectHtml=selectHtml+
			"</select>"+
		"</div>"+
	"</div>";		
	return selectHtml;
}

//根据list生成select
function generateSelectByList(selectId, list,label) {
	var selectHtml = new String();
	selectHtml=selectHtml+
	"<div class='layui-form-item'>"+
	"<label class='layui-form-label'>"+label+"</label>"+
		"<div class='layui-input-block' style='width:200px;' id='"+selectId+"Div'>"+
			"<select id='"+selectId+"'>";
				selectHtml = selectHtml +
				"<option value=''>  </option>";
				for(i = 0; i < list.length; i++) {
				selectHtml = selectHtml +
				"<option value='" + list[i] + "'>" + list[i] + "</option>";
				}
				selectHtml=selectHtml+
			"</select>"+
		"</div>"+
	"</div>";		
	return selectHtml;
}
