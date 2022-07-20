({
    doInit: function(component, event, helper) {
         
        var action = component.get("c.fetchAccount");
        action.setCallback(this, function(response) {
            var state = response.getState(); 
            if (state === "SUCCESS") {
                var storeResponse = response.getReturnValue();
                // set searchResult list with return value from server.
                component.set("v.searchResult", storeResponse);
            }
            
        });
        $A.enqueueAction(action);
    },
    openModel: function(component, event, helper) {
        // for Display Model,set the "isOpen" attribute to "true"
        component.set("v.isOpen", true);
    },
    
    closeModel: function(component, event, helper) {
        // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
        component.set("v.isOpen", false);
    },
    scriptsLoaded: function(component, event, helper) {
        // Return a helper with preserved width of cells
        alert("asdf");
        var fixHelperModified = function(e, tr) {
            
            var $originals = tr.children();
            var $helper = tr.clone();
            $helper.children().each(function(index) {
                $(this).width($originals.eq(index).width())
            });
            return $helper;
        },
            updateIndex = function(e, ui) {
                $('td.index', ui.item.parent()).each(function (i) {
                    $(this).html(i + 1);
                });
            };
        
        $("#sort tbody").sortable({
            helper: fixHelperModified,
            stop: updateIndex
        }).disableSelection();
    },
    selectRow : function(component, event, helper) {
   $A.util.toggleClass(event.target.parentElement.parentElement, 'setSelected');
}
})