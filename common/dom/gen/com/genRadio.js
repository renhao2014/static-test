//valueList=['是','否'];
function generateRadio(valueList,tagName,label){
	var selectHtml = new String();
	selectHtml=selectHtml+
    "<div class='layui-form-item'>"+
	    "<label class='layui-form-label'>"+label+"</label>"+
	    "<div class='layui-input-block'>";
	    	for(i = 0; i < valueList.length; i++) {
	    		if(i==0){
	    			selectHtml = selectHtml +
			        "<input type='radio' name='"+tagName+"' title='"+valueList[i]+"' value='"+valueList[i]+"' checked>";
	    		}else{
	    			selectHtml = selectHtml +
			        "<input type='radio' name='"+tagName+"' title='"+valueList[i]+"' value='"+valueList[i]+"'>";
	    		}
	    	}
	    	selectHtml=selectHtml+
	    "</div>"+
    "</div>";
    return selectHtml;	
}

function generateRadioWithDefault(valueList,tagName,label,defaultValue){
	var selectHtml = new String();
	selectHtml=selectHtml+
    "<div class='layui-form-item'>"+
	    "<label class='layui-form-label'>"+label+"</label>"+
	    "<div class='layui-input-block'>";
	    	for(i = 0; i < valueList.length; i++) {
	    		if(valueList[i]==defaultValue){
	    			selectHtml = selectHtml +
			        "<input type='radio' name='"+tagName+"' title='"+valueList[i]+"' value='"+valueList[i]+"' checked>";
	    		}else{
	    			selectHtml = selectHtml +
			        "<input type='radio' name='"+tagName+"' title='"+valueList[i]+"' value='"+valueList[i]+"'>";
	    		}
	    	}
	    	selectHtml=selectHtml+
	    "</div>"+
    "</div>";
    return selectHtml;		
}