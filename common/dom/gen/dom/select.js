//


//以ID进行选择时，必然结果只有一个，取出的jq对象也可以直接当做单个dom元素使用。
var button=$('#button1')
console.log(button.attr('id'));


//当以非ID属性进行选择时，可能是多个结果
//直接以数组形式访问属性时，会拿取第一对象的对应属性！
var coms=$("#container [type='button']");
console.log(coms.attr('id'));

