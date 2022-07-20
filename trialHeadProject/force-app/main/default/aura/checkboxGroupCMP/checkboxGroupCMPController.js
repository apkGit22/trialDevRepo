({
    doInit:function(component, event){
        var cmpid=document.getElementById('input-1-cb-1');
       // alert(cmpid);
        document.getElementById('input-1-cb-1').className = 'expand';
    },
    
    handleChange: function (component, event) {
        
        var CheckVal = component.get("v.value");
       var ckName = document.getElementsByName(event.name);
        var checked = document.getElementById(event.id);
        alert(checked);
        
        
    /*    alert(CheckVal);
        if(CheckVal=="Ross"){
            alert('red')
        }else {
            alert('none')
        }
        */
    },
    callCheckboxMethod : function(component, event, helper) {      
    var capturedCheckboxName = event.getSource().get("v.value");
    var selectedCheckBoxes =  component.get("v.options");
    if(selectedCheckBoxes.indexOf(capturedCheckboxName) > -1){            
        selectedCheckBoxes.splice(selectedCheckBoxes.indexOf(capturedCheckboxName), 1);           
    }
    else{
        selectedCheckBoxes.push(capturedCheckboxName);
    }
    component.set("v.selectedCheckBoxes", selectedCheckBoxes);
    alert('Selected--'+selectedCheckBoxes);
}
    
   
})