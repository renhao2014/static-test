//字符串拼接方式
//dom对象方式添加    在中部添加内容


//表格数据全局对象
var tableData = new Object();
tableData.length = 0;
tableData.columns = 3;



function initTable() {
	table.empty();

}

function addItem() {
	console.log("add--");
	for(var i = 0; i < 1; i++) {
		//动态创建一个tr行标签,并且转换成jQuery对象
		var trTemp = $("<tr></tr>");
		var tdTemp = $("<td></td>");
		var checkTemp = $('<input type="checkbox" onclick="checkOnClick()" order='+3+'/>');
		tdTemp.append(checkTemp);
		trTemp.append(tdTemp);
		for(var i = 0; i < tableData.columns; i++) {
			var tdTemp = $("<td></td>");
			var inputTemp = $('<input type="text">');
			tdTemp = tdTemp.append(inputTemp);
			trTemp.append(tdTemp);
		}
		table.append(trTemp);
	}
}

function deleteItem() {
	console.log("删除被选中的条目");
}

function sendMessage() {
	console.log("采集短信参数，进行校验，让用户确认，然后发送信息，接口为sendSmsByTemplate1");
}

function checkOnClick(){
	console.log("checkOnClick");
	
	
}
