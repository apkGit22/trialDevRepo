({
	doInit : function(component, event, helper) {
    var ltngSearchStr = component.get("v.accSearchValue");
    var params ={"searchStr":ltngSearchStr};
		helper.callToServer(
        	component,
            "c.findRecords",
            function(response)
            {	
                console.log('apex response :'+JSON.stringify(response));
                component.set("v.recList",response);
                
            }, 
            params
		);
    }
})