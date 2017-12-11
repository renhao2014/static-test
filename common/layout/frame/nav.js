//菜单数据从js中加载
//如果一个对象含有menuInfo属性，说明其下有子菜单
function Nav(config){
	this.menus: [{
		id = 'orderManage',
		title = '订单管理',
		src = '',
		icon = '',
		menuInfo: [{
			id = 'orderList',
			title = '订单列表',
			src = '/order/orderList.html',
			icon = '',
		}, {
			id = 'refundManage',
			title = '退款管理';
			src = '/order/refundManage.html',
			icon = '',
		}]
	}, {
		id = 'userManage',
		title = '用户管理',
		src = '/user/userManage.html',
		icon = '',
	}],
	this.current: {

	}
	
	
};

//根据逻辑视图获取物理视图
Nav.prototype.getViewByName=function(id) {
	//查导航信息
	console.log('abcd');
}

//绘制导航栏，并绑定单击事件
Nav.prototype.renderNavigation=function(container, navInfo) {

}

//单击事件处理中，获取当前被点击id,判断其类型（父菜单，末级菜单）
//若为父级菜单则执行卷伸操作
//若为末级菜单则执行tab操作
//调tab接口判断指定id tab是否已被打开，对应做打开或切换操作。
Nav.prototype.navClickHandler=function(){
	var navBar = $(this);
	var id = navBar.attr('id');
	var view = findViewById(id);
	tabChange(view);
	or
	tabAdd(view);
}





