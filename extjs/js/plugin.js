Ext.util.Format.comboBoxRenderer = function(combo, reload) {
  if(reload)
	  combo.store.reload();
  return function(value) {
    var idx = combo.store.find(combo.valueField, value);
    var rec = combo.store.getAt(idx);
    if(rec)
    	return rec.get(combo.displayField);
    else 
    	return value;
  };
};

Ext.override(Ext.view.Table, {
	focus: function(){
		
	}
});

Ext.namespace('Ext.ux.plugins');
//分页自定义选择页数
Ext.ux.plugins.PageComboResizer = Ext.extend(Object, {

  pageSizes: [10, 20, 50, 100, 200, 500],
//  prefixText: '每页显示',
//  postfixText: '条记录',
  prefixText: '',
  postfixText: '条/页',

  constructor: function(config){
    Ext.apply(this, config);
    Ext.ux.plugins.PageComboResizer.superclass.constructor.call(this, config);
  },

  init : function(pagingToolbar) {
    var ps = this.pageSizes;
    var combo = new Ext.form.ComboBox({
      typeAhead: true,
      triggerAction: 'all',
      lazyRender:true,
      mode: 'local',
      width:45,
      store: ps,
      listeners: {
    	  select:function(combo, record){
    		  var rowIndex = 0;
    		  var gp = pagingToolbar.findParentBy (
    		  	function (ct, cmp) {return (ct instanceof Ext.grid.GridPanel) ? true : false;}
    		  );
    		  var sm = gp.getSelectionModel();
              sm.store.pageSize=this.lastValue;
    	  }
      }
    });
    if(pagingToolbar.pageSize != undefined){
    	pagingToolbar.store.pageSize = pagingToolbar.pageSize;
    }else{
    	pagingToolbar.pageSize = this.pageSizes[0];
    	pagingToolbar.store.pageSize = this.pageSizes[0];//默认第一个
    }
    Ext.iterate(this.pageSizes, function(ps) {
      if (ps==pagingToolbar.pageSize) {
        combo.setValue (ps);
        return;
      }
    });

    var inputIndex = pagingToolbar.items.indexOf(pagingToolbar.refresh);
    pagingToolbar.insert(++inputIndex,'-');
    pagingToolbar.insert(++inputIndex, this.prefixText);
    pagingToolbar.insert(++inputIndex, combo);
    pagingToolbar.insert(++inputIndex, this.postfixText);
    pagingToolbar.on({
      beforedestroy: function(){
        combo.destroy();
      }
    });

  }
});