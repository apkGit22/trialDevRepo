({
    doInit: function(component, event, helper) {
        
        var action = component.get("c.getContactwrap");
        
        action.setParams({
            "objName":component.get("v.objName"),
            "objFields":component.get("v.objFields")
        });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if (state === "SUCCESS") {
                console.dir(response.getReturnValue());
                component.set("v.ContactData", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    
    doView: function(component, event, helper) {
        var editRecordEvent = $A.get("e.force:navigateToSObject");
        editRecordEvent.setParams({
            "recordId": event.target.id
        });
        editRecordEvent.fire();
    },
    allowDrop: function(component, event, helper) {
        event.preventDefault();
    },
    
    drag: function (component, event, helper) {
        
        
        event.dataTransfer.setData("text", event.target.id);
        
    },
    
    drop: function (component, event, helper) {
    var data = event.dataTransfer.getData("text");
    // Find the record ID by crawling up the DOM hierarchy
    var tar = event.target.closest('[id]');
    var contactData = component.get("v.ContactData");
    var index1, index2, temp;
    // Find the index of each item to move
    contactData.records.forEach((v,i)=>{if(v.Id===data) index1 = i; if(v.Id===tar.id) index2 = i;});
    if(index1<index2) {
        // Lower index to higher index; we move the lower index first, then remove it.
        contactData.records.splice(index2+1, 0, contactData.records[index1]);
        contactData.records.splice(index1, 1);
    } else {
        // Higher index to lower index; we remove the higher index, then add it to the lower index.
        temp = contactData.records.splice(index1, 1)[0];
        contactData.records.splice(index2, 0, temp);
    }
    // Trigger aura:valueChange, component will rerender
    component.set("v.ContactData", contactData);
    event.preventDefault();
},
   
   /* showSpinner : function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible : true });
        evt.fire();    
    },*/
 
    handleClick: function (cmp, event) {
        cmp.set('v.loaded', !cmp.get('v.loaded'));
    }

})