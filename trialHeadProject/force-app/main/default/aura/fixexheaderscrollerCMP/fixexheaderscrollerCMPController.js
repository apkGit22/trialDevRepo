({
    
    doInit : function(component, event, helper) {        
        $(".table-body").scroll(function ()
                                {                                    	
                                    //$(".table-header").css('background','blue');
                                    $(".table-header").offset({ left: -1 * this.scrollLeft });
                                });
        
    }
})