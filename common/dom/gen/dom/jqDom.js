
//在容器中间加入内容
//开头加入   自建+读取出原来的内容
//中间加入   首先是要定位出'中间'具体指哪
//末尾加入   末尾加入  读取原来内容+自建


var container=$('#button-container');
var htmlStr="<input type='button' value='button1'/>";
//container.html(htmlStr);//覆盖原来的button
container.append($(htmlStr));//出现两个button



