sap.ui.jsview("foodmenuariba.AribaLocation", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf foodmenuariba.AribaLocation
	*/ 
	getControllerName : function() {
		return "foodmenuariba.AribaLocation";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf foodmenuariba.AribaLocation
	*/ 
	createContent : function(oController) {
		
		app = sap.ui.getCore().byId("myFoodApp");
		
		var page2 =new sap.m.Page("page2",{  
             title: "Ariba Food Menu",    
             showNavButton: true,  
             navButtonTap:function(){   
           	  app.back();
                            
             }  
});  

var oContainer = new sap.m.TileContainer({});  
page2.addContent(oContainer);  

var T1 = new sap.m.StandardTile({
title:"Food Menu Sharada Towers",
info : "Lunch",
number : "1",
infoState : "Success",
icon : "sap-icon://meal",
press : function() {
app = sap.ui.getCore().byId("myFoodApp");
app.to("idMainView3");
}
});  
oContainer.addTile(T1);

var T2 = new sap.m.StandardTile({
title:"Food Menu Sharada Towers",
info : "Dinner",
number : "2",
infoState : "Success",
icon : "sap-icon://meal",
press : function() {
app = sap.ui.getCore().byId("myFoodApp");
app.to("idMainView4");
}
});  
oContainer.addTile(T2);

var T3 = new sap.m.StandardTile({
title:"Food Menu EcoWorld",
info : "Lunch",
number : "3",
infoState : "Success",
icon : "sap-icon://meal",
press : function() {
app = sap.ui.getCore().byId("myFoodApp");
app.to("idMainView5");
}
});  
oContainer.addTile(T3);

var T4 = new sap.m.StandardTile({
title:"Food Menu EcoWorld",
info : "Dinner",
number : "4",
infoState : "Success",
icon : "sap-icon://meal",
press : function() {
app = sap.ui.getCore().byId("myFoodApp");
app.to("idMainView6");
}
});  
oContainer.addTile(T4);

var T5 = new sap.m.StandardTile({
title:"Food Menu",
info : "Breakfast",
number : "5",
infoState : "Success",
icon : "sap-icon://nutrition-activity",
press : function() {
app = sap.ui.getCore().byId("myFoodApp");
app.to("idMainView7");
}
});  
oContainer.addTile(T5);

return page2;
	}

});