({
    doInit : function(component, event, helper) {       	  
        window.onscroll = function() {myFunction()};
        
        var header = document.getElementById("fixhdr");
        var sticky = header.offsetTop;         
       
        function myFunction() {
           
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
        
        /*$(window).scroll(function(){
           console.log($(window).scrollTop());
          var scrollposi = $("#fixhdr").offset().top;
           console.log(scrollposi);
            if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
                $('#fixhdr').css('position','static');
                 $('#fixhdr').css('width','100%');
            }else{
                $('#fixhdr').css('position','fixed');                
                $('#fixhdr').css('z-index','20');
                $('#fixhdr').css('width','63%'); 
                 $('#fixhdr').css('behavior','smooth');
            }
        });*/
        },
	crewAst: function(component, event, helper) {
        
		var crewastv = component.find("crewast");       
    	$A.util.toggleClass(crewastv, "toggle1");
	 },
    lauSer: function(component, event, helper) {         
		var lauserv = component.find("lauser");       
    	$A.util.toggleClass(lauserv, "toggle1");
	 }
    
});