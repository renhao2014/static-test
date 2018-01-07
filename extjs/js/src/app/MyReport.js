Ext.define("Ext.app.MyReport",{
	extend:'Ext.panel.Panel',
	autoDestroy:true,
	requires:['report.ReportDefine'],
	layout:'border',
	items:[Ext.create('Ext.tree.Panel', {
		width:'100%',
		height:'100%',
		region:'west',
		id:'myreport.tree.panel',
		rootVisible:true,
		useArrows: true,
	    frame: true,
	    store :new Ext.data.TreeStore({
	    	//autoLoad:true,
	    	id:'reportTreeStore',
	    	defaultRootText:'所有报表',
	    	defaultRootId:'-1',
	        proxy: {
	           type: 'ajax',
	           url: BasePath+'report/reportTree'
	           //url: 'js/check-nodes.json'
	        },
	        sorters: [{
	            property: 'leaf',
	            direction: 'ASC'
	        }]
	    }),
		listeners:{
			itemdblclick:function(tree, record, item, index, e, eOpts){
			//disableBtn(!record.get('leaf'));
				if(record.get('leaf')){
					var url = BasePath+"report/showJsReport?reportId="+record.get('id');
					var maxWin = Ext.getCmp('myReport_'+record.get('id'));
					if(!maxWin){
						maxWin = Ext.create('Ext.window.Window', {
							title:record.get('text'),
							id:'myReport_'+record.get('id'),
						    autoDestroy:true,
						    width:1000,
						    height:600,
						    minWidth:270,
						    minHeight:50,
						    constrainHeader:true,
						    maximizable:true,
						    minimizable:true,
						    minimize:function(){
						    	this.setSize(270,50);
						    },
						    layout: 'fit',
						    items: {  // Let's put an empty grid in just to illustrate fit layout
						    	html:'<div style="height:100%;width:100%;overflow: scroll;"><iframe scrolling="auto" style="width:100%;height:100%;" id="fullMyReportIframe" src="'+url+'"></iframe></div>'
						    }
						});
					}else{
						maxWin.setSize(1000,600);
					}
					maxWin.center();
					maxWin.show();
					
				}
			
			},
			
			render:function(tree,opt){
				this.store.load({callback:function(recs, oper, sucess){
  		        			if(sucess){
      		        			var n = tree.getRootNode().firstChild.childNodes;
      		        			if(n.length>0){
      		        				tree.selectPath(n[0].getPath());
      		        				lastSelected = n[0].get('id');
      		        			}
      		        		}
      		        	}});
			}
		}
	})]
});