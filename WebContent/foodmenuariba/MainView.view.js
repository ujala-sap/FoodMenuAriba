sap.ui.jsview("foodmenuariba.MainView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf foodmenuariba.MainView
	*/ 
	getControllerName : function() {
		return "foodmenuariba.MainView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf foodmenuariba.MainView
	*/ 
	createContent : function(oController) {
		
		app = sap.ui.getCore().byId("myFoodApp");
		
		var page1 = new sap.m.Page("page1", {
						title: "Ariba Food Menu",
							showNavButton: false,
							navButtonTap:function(){
								app.to("idFoodMenuView2")
							}
			
		});
		
		var oContainer = new sap.m.TileContainer({});
		page1.addContent(oContainer);
		
		var T1 = new sap.m.StandardTile({
			title:"Food Menu",
			info : "Aliba Food Menu",
			number : "1",
			infoState : "Success",
			press : function() {
				app.to("idMainView2");
			} 
				});  
		oContainer.addTile(T1);
		
		return page1;
}
});