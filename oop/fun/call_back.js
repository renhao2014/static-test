function  c(callback){
      callback.call(this,'a','1','A');
      callback('b','2','B');
}



//调用
c(function(e){
	console.log(this.name);//两次全是''
    console.log(e);
});

function toBeCallback(p1,p2){
	console.log()
	
}
