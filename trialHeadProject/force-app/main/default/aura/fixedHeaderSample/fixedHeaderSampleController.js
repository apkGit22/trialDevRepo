({
    doInit: function(cmp) {
        cmp.set("v.divHeight", "300");
    },
    
	doneRendering: function(cmp, event, helper) {
        var left = document.getElementById("left");
        var height = (window.innerHeight) - 280;
        left.style.height = height + "px";
      
        
    },
    changeHeight: function(component, event, helper) {
        component.set("v.divHeight", "300");
         // var custhgt=component.find("dynahgt");
      //  component.set("v.custhgt", "300");
    }
})