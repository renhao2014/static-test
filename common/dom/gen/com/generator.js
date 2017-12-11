var serverPath="http://localhost:82/"
var databaseInfo;


//读取和校验连接信息
//function getLinkInfo(){
//	var databaseInfo=new Object();
//	databaseInfo.ip=$('#dbIp').val();
//	databaseInfo.port=$('#dbPort').val();
//	databaseInfo.name=$('#dbName').val();
//	databaseInfo.userName=$('#userName').val();
//	databaseInfo.password=$('#password').val();
//	return databaseInfo;
//}

//根据数据绘制表信息
function renderTablesInfo(databaseInfo){
	console.log("renderTablesInfo");
	$('#dbIp').val(databaseInfo.ip);
	$('#dbPort').val(databaseInfo.port);
	$('#dbName').val(databaseInfo.name);
	$('#userName').val(databaseInfo.userName);
	$('#password').val(databaseInfo.password);
	
	var tablesHtml=new String();
	$("#tablesInfo").html("");
	//遍历表
	var tableInfos=databaseInfo.tableInfos;
	for(i=0;i<tableInfos.length;i++){
		var currentTableInfo=tableInfos[i];
		var currentTableName=currentTableInfo.tableName;
		tablesHtml=tablesHtml+
		"<input type='button' class='tableButton' value='"+currentTableName+"'  >"+"<input type='checkbox' id='"+currentTableName+"IsGenerateNeeded'/>是否生成对应文件  "  +"<br/> "+
		"<div class='tableInfo' id='"+currentTableName+"Div' style='display:none;'> "+
		"表名称："+currentTableName+"<br/> "+
			"实体名称：<input type='text' id='"+currentTableName+"Attribute'/>可不填，默认按下划线转驼峰方式转换+Entity后缀<br/> "+
			"<input type='checkbox' id='"+currentTableName+"IsAddNeeded' checked='checked'/>新增  "+
			"<input type='checkbox' id='"+currentTableName+"IsDelNeeded' checked='checked'/>删除 "+
			"<input type='checkbox' id='"+currentTableName+"IsUpdateNeeded' checked='checked'/>编辑 "+
			"<input type='checkbox' id='"+currentTableName+"IsBatchDelNeeded' checked='checked'/>批量删除 "+
		"<br/>";
		for(j=0;j<currentTableInfo.segmentInfos.length;j++){
			var currentSegmentInfo=currentTableInfo.segmentInfos[j];
			var currentSegmentName=currentSegmentInfo.segmentName;
			tablesHtml=tablesHtml+
			"&emsp;字段："+currentSegmentName+"<br/> "+ 
			"&emsp;&emsp;<input type='checkbox' id='"+currentTableName+currentSegmentName+"IsDisplayedNeeded' checked='checked'/>显示在列表   <br/> "+
			"&emsp;&emsp;<input type='radio' value='NO' name='"+currentTableName+currentSegmentName+"Query' checked='checked'/>不加入查询 "+
			"&emsp;&emsp;<input type='radio' value='EXACT' name='"+currentTableName+currentSegmentName+"Query' />精确查询 "+
			"&emsp;&emsp;<input type='radio' value='RANGE' name='"+currentTableName+currentSegmentName+"Query' />范围查询 "+			
			"&emsp;&emsp;<input type='radio' value='LEFT_VAGUE' name='"+currentTableName+currentSegmentName+"Query' />左模糊查询 "+
			"&emsp;&emsp;<input type='radio' value='RIGHT_VAGUE' name='"+currentTableName+currentSegmentName+"Query' />右模糊查询 "+
			"&emsp;&emsp;<input type='radio' value='BOTH_VAGUE' name='"+currentTableName+currentSegmentName+"Query' />左右模糊查询 "+	
			"<br/><br/> ";
		}
		tablesHtml=tablesHtml+"<p></p> "+"</div> ";
	}
	$('#tablesInfo').html(tablesHtml);
	$(".tableButton").click(function(){
		console.log("tableButtonClick");
		toggleDisplay(this.value+'Div');
	});
}



function toggleDisplay(id){
	$('#'+id)[0].style.display=($('#'+id)[0].style.display=='none')?'block':'none';
}

//根据连接信息，发起异步请求  异步中绘制表数据
function getDatabaseInfo(){
//	var databaseInfo=getLinkInfo();
	$.ajax({
		type: "GET",
		url: serverPath+"generator/getDatabaseInfo",
//		data:databaseInfo,
		dataType: "json",
		success: function(dataa) {
			console.log("getdata from server:" + JSON.stringify(dataa));
			renderTablesInfo(dataa.data);
			databaseInfo=dataa.data;
		}
	});
}

//初始化
$(function(){
	console.log("init");
	//点击重新获取数据库信息
	$('#linkButton').click(function(){
		console.log("linking...");
		getDatabaseInfo();	
	});

	$('#generateButton').click(function(){
		console.log("generate...");
		generateCodeFiles();
	});

	getDatabaseInfo();
});



function getDatabaseInfoWithConfig(){
	var tableInfos=databaseInfo.tableInfos;
	for(i=0;i<tableInfos.length;i++){
		var currentTableInfo=tableInfos[i];
		var currentTableName=currentTableInfo.tableName;
		//是否生成该表
		if($("#"+currentTableName+"IsGenerateNeeded")[0].checked){
			currentTableInfo.isGenerateNeeded=true;
			//只有生成本表时，才需要做后续操作
			//是否需要修改实体名称
			if($("#"+currentTableName+"Attribute").val()!=""){
				currentTableInfo.entityName=$("#"+currentTableName+"Attribute").val();
			}
			//是否需要新增
			if($("#"+currentTableName+"IsAddNeeded")[0].checked){
				currentTableInfo.isAddNeeded=true;
			}
			//是否需要删除
			if($("#"+currentTableName+"IsDelNeeded")[0].checked){
				currentTableInfo.isDelNeeded=true;
			}		
			//是否需要修改
			if($("#"+currentTableName+"IsUpdateNeeded")[0].checked){
				currentTableInfo.isUpdateNeeded=true;
			}			
			//是否需要批量删除
			if($("#"+currentTableName+"IsBatchDelNeeded")[0].checked){
				currentTableInfo.isBatchDelNeeded=true;
			}		
			
			
			for(j=0;j<currentTableInfo.segmentInfos.length;j++){
				var currentSegmentInfo=currentTableInfo.segmentInfos[j];
				var currentSegmentName=currentSegmentInfo.segmentName;
				//是否显示该字段
				if($("#"+currentTableName+currentSegmentName+"IsDisplayedNeeded")[0].checked){
					currentSegmentInfo.isDisplayedNeeded=true;
					
					//只有需要显示，才会有后续需求
					//约束类型NO
					currentSegmentInfo.restraintType=
					$("input[name='"+currentTableName+currentSegmentName+"Query']:checked").val();
				}
			}
		}
	}
	return databaseInfo;
}


//生成文件
function generateCodeFiles(){
	var databaseInfo=getDatabaseInfoWithConfig();
	$.ajax({
		type: "GET",
		url: serverPath+"generator/generateCodeFiles",
		data:{'databaseInfoJson':JSON.stringify(databaseInfo)},
		dataType: "json",
		success: function(dataa) {
			console.log("getdata from server:" + JSON.stringify(dataa));
			renderTablesInfo(dataa.data);
		}
	});
	
}
