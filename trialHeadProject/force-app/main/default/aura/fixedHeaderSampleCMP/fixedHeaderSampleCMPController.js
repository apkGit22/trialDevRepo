({
    
    doInit : function(component, event, helper) {
        
        $(".table-body").scroll(function ()
                                {
                                    $(".table-header").offset({ left: -1 * this.scrollLeft });
                                });
        
    }
})