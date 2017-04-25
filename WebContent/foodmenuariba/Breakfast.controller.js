sap.ui.controller("foodmenuariba.Breakfast", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf foodmenuariba.Breakfast
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf foodmenuariba.Breakfast
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf foodmenuariba.Breakfast
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf foodmenuariba.Breakfast
*/
//	onExit: function() {
//
//	},
	
	/**
	 * This function is used to back the Navigation Button
	 */
	actBack: function() {
		
		app = sap.ui.getCore().byId("myFoodApp");
		app.back();
	},
	
	/**
	 * This function is used to upload the data to the corresponding Food menu Table on load.
	 */
		 onUpload: function(e) {
				
				var fU = this.getView().byId("idfileUploader");
				var domRef = fU.getFocusDomRef();
				var file = domRef.files[0];
				
				
				// Create a File Reader object
				var reader = new FileReader();
				var t = this;
				
				reader.onload = function(e) {
				    var strCSV = e.target.result;
				    var arrCSV = strCSV.match(/[\w \/ \( \) \# \! \~ \` \$ \% \^ \& \* \-]+(?=,?)/g);
				    var noOfCols = 5;

				    // To ignore the first row which is header
				    var hdrRow = arrCSV.splice(0, noOfCols);

				    var data = [];
				    while (arrCSV.length > 0) {
					var obj = {};
					// extract remaining rows one by one
					var row = arrCSV.splice(0, noOfCols)
					for (var i = 0; i < row.length; i++) {
					    obj[hdrRow[i]] = row[i].trim()
					}
					// push row to an array
					data.push(obj)
				    }
				    
				    // Bind the data to the Table
				    var oModel = new sap.ui.model.json.JSONModel();
				    oModel.setData(data);
				    var oTable = t.byId("idTable");
				    oTable.setModel(oModel);
				};
				reader.readAsBinaryString(file);
			    }
		
	});