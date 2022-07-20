({
    checkboxHandler: function (cmp, event, helper) {      
        var oldValue= event.getParam("oldValue");
        var newValue = event.getParam("value");
        console.log("old value: " + oldValue);
        console.log("new value: " + newValue);
        // Identify the new checkbox value
        if(oldValue.length < newValue.length){
            alert('new value--'+helper.getDifference(oldValue, newValue));
        }
    },
    
    showSuccessToast : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
 			title : 'Success Message',
            message: 'Mode is pester ,duration is 5sec and this is normal Message',
            messageTemplate: 'Record {0} created! See it {1}!',
            duration:' 5000',
            key: 'info_alt',
            type: 'success',
            mode: 'pester' 
        });
        toastEvent.fire();
    }
    
});