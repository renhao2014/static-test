/*****************************************************************
                  jQuery Ajax封装通用类  (linjq)       
*****************************************************************/
/**
 * 依赖
 * jquery
 * 
 */
//一些配置参数
//当前是否允许ajax请求 0允许1不允许
var ajaxSwitch=0;
//ajax最短发送间隔时间(ms)
var ajaxInteval=1500;
var operateFrequencyMsg="当前操作过于频繁，请稍后再试";
var SystemErrorCode="500";//系统异常
var NoEnoughAuthCode="400";//权限不足

//改变ajaxSwitch
function revertAjaxSwitch(status){
	ajaxSwitch=status;
}
//操作频繁的提示，具体展现形式可调整
function remind(content,level){
	alert(content);
}

//处理http请求正常的响应
function _handleHttpSuccess(successfn,d){
	try{
		if(d.code==SystemErrorCode){
			remind("系统异常");
		}else if(d.code==NoEnoughAuthCode){
			remind("权限不足");
		}else{
			successfn(d);
		}
	}catch(error){}
    setTimeout(function(){revertAjaxSwitch(0)},ajaxInteval);
}


//处理http请求异常的响应
function _handleHttpError(errorfn){
	try{
		errorfn(error);
	}catch(error){}
    setTimeout(function(){revertAjaxSwitch(0)},ajaxInteval);
}

/**
 * ajax封装
 * url 发送请求的地址
 * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
 * async 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
 *       注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
 * type 请求方式("POST" 或 "GET")， 默认为 "GET"
 * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
 * successfn 成功回调函数
 * errorfn 失败回调函数
 */
$.fullAjax=function(url, data, async, type, dataType, successfn, errorfn) {
	//先检查当前是否允许ajax请求
	if(ajaxSwitch==0){
		revertAjaxSwitch(1);
	    async = (async==null || async=="" || typeof(async)=="undefined")? "true" : async;
	    type = (type==null || type=="" || typeof(type)=="undefined")? "post" : type;
	    dataType = (dataType==null || dataType=="" || typeof(dataType)=="undefined")? "json" : dataType;
	    data = (data==null || data=="" || typeof(data)=="undefined")? {"date": new Date().getTime()} : data;
	    $.ajax({
	        type: type,
	        async: async,
	        data: data,
	        url: url,
	        dataType: dataType,
	        success: _handleHttpSuccess(successfn,d),
	        error: _handleHttpError
	    });
	}else{
		remind(operateFrequencyMsg);
	}    
};

/**
 * ajax封装
 * url 发送请求的地址
 * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
 * successfn 成功回调函数
 */
$.simpleAjax=function(url, data, successfn) {
	if(ajaxSwitch==0){
		revertAjaxSwitch(1);
	    data = (data==null || data=="" || typeof(data)=="undefined")? {"date": new Date().getTime()} : data;
	    $.ajax({
	        type: "post",
	        data: data,
	        url: url,
	        dataType: "json",
	        success:function(d){
	        	_handleHttpSuccess(successfn,d)
	        },
	        error: _handleHttpError
	    });
	}else{
		remind(operateFrequencyMsg);
	}     
};




