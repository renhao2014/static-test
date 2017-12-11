var serverPath="http://localhost:82/"

//获取查询条件 比如约束，分页信息等
//并对查询条件进行校验
function getQueryRestarint(){
	var restraint=new Object();
	//从控件获取当前分页状态，测试暂时写死
	restraint.page=0;
	restraint.pageSize=10;
	
	var template=new Object();
	template.templateStatus=1;
	template.templateName='name1';
	
	restraint.template=template;
	return JSON.stringify(restraint);
}

function getList(){
	var queryRestraintJson=getQueryRestarint();
	$.ajax({
		type: "POST",
		url: serverPath+"template/queryDynamic",
		data:{'queryRestraintJson':queryRestraintJson},
		dataType: "json",
		success: function(dataa) {
			console.log("getdata from server:" + JSON.stringify(dataa));
			renderDataList(dataa.data);
		}
	});
}

function renderDataList(data){
	var tableHtml=new String();
	for(i=0;i<data.length;i++){
		var currentTemplate=data[i];
		tableHtml=tableHtml+"<tr>"+
		"<td><input type='checkbox' id='box"+currentTemplate.templateId+"'></td>";
		//遍历对象属性
		for(var key in currentTemplate){		
			tableHtml=tableHtml+
			"<td>"+currentTemplate[key]+"</td>";
		}
	}
	$('#templateTbody').html(tableHtml);	
}


$(function(){
	console.log("init");
	toggleDisplay('addOrUpdate');
	getList();
	$(".baseOperation").click(function(){
		if(this.value=='add'){
			toggleDisplay('addOrUpdate');			
		}else if(this.value=='delete'){
			
		}else if(this.value=='update'){
			toggleDisplay('addOrUpdate');
		}else if(this.value=='提交'){
			toggleDisplay('addOrUpdate');
		}
	});
		
	
});

function add(){
	
}

function delete1(){
	
}

function update(){
	
}


function toggleDisplay(id){
	$('#'+id)[0].style.display=($('#'+id)[0].style.display=='none')?'block':'none';
}