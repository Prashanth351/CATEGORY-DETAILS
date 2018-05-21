sap.ui.controller("category-details.VIEW", {


	onInit: function() {
		
		var oModel = new sap.ui.model.json.JSONModel();
		 oModel.loadData("model/model.json");
		this.getView().setModel(oModel,"list")
		
		
		
	},

	
	handleOpen : function (oEvent) {
		debugger;
		
	   
		var oModel = new sap.ui.model.json.JSONModel();
		 oModel.loadData("model/model.json");
		this.getView().setModel(oModel,"list")
		
        var oView = this.getView();
        this._oDialog = oView.byId("idactionsheet");
        var oButton = oEvent.getSource()
        // create dialog lazily
        if (!this._oDialog) {
           // create dialog via fragment factory
        	this._oDialog = sap.ui.xmlfragment(oView.getId(), "fragmentViews.Category",this);
           oView.addDependent(this._oDialog);
           
        }         
        this._oDialog.openBy(oButton);
     },
	

	/*handleOpen : function (oEvent) {
		var oModel = new sap.ui.model.json.JSONModel();
		 oModel.loadData("model/model.json");
		 var oView = this.getView();
		 debugger;
          this._oDialog= oView.byId("idactionsheet");

		
		
		
		var oButton = oEvent.getSource();
           var oView =this.getView
		// create action sheet only once
		if (!this._oDialog) {
			this._oDialog = sap.ui.xmlfragment(this.getView().getId(),	
				"fragmentViews.Category",
				this
				
			);
			 this.getView().addDependent(this._oDialog);
			   this._oDialog.setModel(oModel,"list");
		}
		
        
        //   oDialog.open();
	
	this._oDialog.openBy(oButton);
	},
*/	
     actionSelected : function(oEvent){
		sap.m.MessageToast.show("Selected action is '" + oEvent.getSource().getText() + "'");
	}
	
	

	
	
	


});