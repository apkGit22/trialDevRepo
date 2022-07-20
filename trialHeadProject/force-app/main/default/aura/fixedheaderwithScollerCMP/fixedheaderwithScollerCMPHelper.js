({
	/*updateScroll : function(component, event, helper){
        console.log("updateScroll");
        var scroller = component.find("scroller");
        scroller.scrollTop("bottom",0,0);
    },*/
     helperFun : function(component,event,secId) {
        var acc = component.find(secId);
        for(var cmp in acc) {
            $A.util.toggleClass(acc[cmp], 'slds-show');
            $A.util.toggleClass(acc[cmp], 'slds-hide');
        }
    },
    getInputCell : function(component, event){
        return component.find("inputCell");
    }, 
    checkDate : function (cellInput, component, event) {
        var value = cellInput.get("v.value");
        
        if (value){
            try{
                $A.localizationService.formatDate(value, "dd/MM/yyyy");
            }
            catch (e) {
                component.set("v.errors", [{
                    message: "Invalid date: " + value
                }]);
            }
        }
    },    
   
    checkPrecision : function (cellInput, component, event) {
        var precision = component.get("v.precision");
        var value = cellInput.get("v.value");
        
        if (value && value.toString().length > precision + 1) {
            component.set("v.errors", [{
                message: "Input too long: >" + precision
            }]);
        }
    },
    beforeCheckInput : function(component, event){        
        component.set("v.hasErrors", false);
        component.set("v.errors", []); 
    },
    afterCheckInput : function(component, event){
        component.set("v.hasErrors", component.get("v.errors").length > 0);       
    },
    customCheckInput : function(cellInput, component, event){
        //Virtual function
    },
})