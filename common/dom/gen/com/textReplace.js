//根据字典替换显示
//遍历查找后返回
function transferTextByDic(list,valueName,contentName,label,currentValue){
	var textHtml = new String();
	for(i=0;i<list.length;i++){
		if(list[i][valueName]==currentValue){
			return list[i][contentName];
		}
	}
	return "";
}