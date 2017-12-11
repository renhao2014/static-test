var boxById;
var boxByClass;

//表格数据全局对象
var tableData = new Object();
tableData.length = 0;
tableData.columns = 2;
//创建表格dom对象
var table = $("#messageContentTable");

function dom_init() {
	//	console.log("dom_init");
}

function domSeletTest() {
	//通过id定位
	boxById = $("#boxId");
//	console.log(boxById.html());
//	var boxChildren= boxById.children();
    //经过each之后就会变为dom对象 不再是jQuery对象 不能再使用jQuery的方法
//	$.each(boxChildren, function(index,item) {
//		console.log(item.innerHTML);
//	});
	
//	var boxChildren1= $("#table1 td");
//	$.each(boxChildren1, function(index,item) {
//		console.log(item.innerHTML);
//	});
	
//	var tdSiblings= $("#tbody_td1").siblings();
//	$.each(tdSiblings, function(index,item) {
//		console.log(item.innerHTML);
//	});


//	var tdParent= $("#tbody_td1").parent();
//	console.log(tdParent[0].innerHTML);

	//选择出tbody标签下的所有button 并为它们注册事件；
	//当事件发生时，判断出是第几个button被按下。并将与之同在一个tr标签下的checkbox更换状态；
	var tags= $("tbody td");
	console.log(tags.length);
//	$.each(tags,function(index,item){
//		console.log(item.innerHTML);
//	});
	console.log(tags.eq(0).html());
	
//	tags=$("p :");
	

	//根据class定位
	//	boxByClass = $(".box").eq(0);
	//	console.log(boxByClass.html());

	//根据标签定位

	//组合定位

}

//动态绘制dom元素（dom对象）
function domOperationTest() {

}

function domHtmlTest() {
	//动态绘制dom元素（直接绘制dom标签）
	boxById.html("");
	var boxJoin = '';
	boxJoin = boxJoin.concat("<a href='www.baidu.com'>腾讯</a>	")
	boxJoin = boxJoin.concat("<a href='www.baidu.com'>阿里</a>	")
	boxById.html(boxJoin);

}

function initTable() {
	table.empty();
}

function addItem() {
	console.log("add--");
	for(var i = 0; i < 1; i++) {
		//动态创建一个tr行标签,并且转换成jQuery对象
		var trTemp = $("<tr></tr>");
		var tdTemp = $("<td></td>");
		var checkTemp = $('<input type="checkbox" onclick="checkOnClick()" order=' + 3 + '/>');
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

function checkOnClick() {
	console.log("checkOnClick");
}

dom_init();
domSeletTest();