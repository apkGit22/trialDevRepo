({
        doInit : function(component, event, helper) {
            
            var $checkboxes = $('.dropdowncont input[type="checkbox"]'); 
            $checkboxes.change(function(){                
                var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
                // $('#count-checked-checkboxes').text(countCheckedCheckboxes);                
                $('#edit-count-checked-checkboxes').val(countCheckedCheckboxes);
            });
        },
        crewAst: function(component, event, helper) {
            
            var crewastv = component.find("crewast");       
            $A.util.toggleClass(crewastv, "toggle1");
            
        },
        lauSer: function(component, event, helper) {         
            var lauserv = component.find("lauser");       
            $A.util.toggleClass(lauserv, "toggle1");
            var scrll = component.get("v.scroll");
            if(scrll)
                component.set("v.scroll",false);
            else
                component.set("v.scroll",true);
            //$A.get('e.force:refreshView').fire();
            
        },
        hidechkbox:function(component, event, helper) {          
           // $('.hidechkbox').css('display','none')
        },
        
        
        dropdwn: function(component, event, helper) {
            // $('.hidechkbox').css('display','block')
            var dropDwnv = component.find("dropdwnchk");       
            $A.util.toggleClass(dropDwnv, "toggle1");
            
        }
        
    });