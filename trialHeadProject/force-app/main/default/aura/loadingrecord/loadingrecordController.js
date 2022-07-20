({
    handleSuccess : function(component, event, helper) {
        var contactRec = event.getParams().response;
        var navEvt = $A.get("e.force:navigateToSObject");
        
        navEvt.setParams({
            "recordId": component.get("v.contactRec.Id"),
            "slideDevName": "related"
        });
        
       
       navEvt.fire();
    }
})