({
	handleForm : function(component,event,helper){
        var nameCmp = component.find("name");
        if(!$A.util.isEmpty(component.get("v.acc.Name")) && component.get("v.acc.Name")=="Salesforce"){
        	nameCmp.setCustomValidity("Name cannot be Salesforce") ;
        }else{
            nameCmp.setCustomValidity("") ;
        }
        nameCmp.reportValidity() ;
        
        var dateCmp = component.find("date");
        if(component.get("v.acc.dhr__Custom_Date_Time__c") >   component.get("v.acc.dhr__SLA_Expiration_Date_Time__c")){
        	dateCmp.setCustomValidity("Cannot be future..") ;
        }else{
            alert('clearing..');
            dateCmp.setCustomValidity("") ;
        }
        dateCmp.reportValidity() ;
    }
})