({
    doInit: function(component, event, helper) { 
        // for Hide/Close Model,set the "isOpen" attribute to "Fasle"          
      component.set("v.popOpen", false);
    /*     $("#products").on("click","button",function(e) {
            e.preventDefault();
            $(this).closest("tr").nextUntil(".parent").toggleClass("open");
        });*/
        
        var s = component.get("v.value")
        if(s!=undefined && s.length != 5 && s.length != 12){
          var ms = s % 1000;
          s = (s - ms) / 1000;
          var secs = s % 60;
          s = (s - secs) / 60;
          var mins = s % 60;
          var hrs = (s - mins) / 60;
        
          var timest = pad(hrs) + ':' + pad(mins);
          component.set("v.value", timest);
        }
        else if(s!=undefined && s.length == 12){
            var timest = s.substring(0,5);
            component.set("v.value", timest);
        }
            
        function pad(n, z) {
            z = z || 2;
            return ('00' + n).slice(-z);
          }

        
    },
    fixQty : function(component, event, helper) {
    	var qty = event.getSource().get("v.value");
        if(qty!=undefined) {
        	qty = qty
                .replace(/[^\d.]/g, '')             // numbers and decimals only
                .replace(/(^[\d]{4})[\d]/g, '$1')   // not more than 15 digits at the beginning
                .replace(/(\..*)\./g, '$1')         // decimal can't exist more than once
                .replace(/(\.[\d]{2})./g, '$1');    // not more than 2 digits after decimal

        event.getSource().set('v.value', qty);
        }
    },
	fixedtbl : function(component, event, helper) {
        $('table').on('scroll', function() {
            $("table > *").width($("table").width() + $("table").scrollLeft());
        });
        
	},
    /*showcmt: function(component, event, helper) {
       // var shcmt=document.getElementById('cmtcontID');
       // shcmt.style.display="block";
        
        $('#cmtctrlID').click(function(e)
                              {
                                  //getting height and width of the message box
                                  var height = $('#cmtcontID').height();
                                  var width = $('#cmtcontID').width();
                                  //calculating offset for displaying popup message
                                  //var leftVal=e.pageX-(width/2)+"px";
                                  var topVal=e.pageY-(height/2)+40+"px";
                                  //show the popup message and hide with fading effect
                                  $('#cmtcontID').css({right:"10%",top:topVal}).show(800);
                              });
        
        
        //alert(toppos);
        //alert(leftpos);
       // var popuppost = document.getElementById("");
       // var x = event.clientX;
   		//var y = event.clientY;
        
    },*/

    handleChange: function (cmp, event) {
        // This will contain the string of the "value" attribute of the selected option
        var selectedOptionValue = event.getParam("value");
        alert("Option selected with value: '" + selectedOptionValue + "'");
    },
    popupOpen: function(component, event, helper) {
      // for Display Model,set the "isOpen" attribute to "true"
      // var txtareacls = event.target.id;
      //  var x = document.getElementsByTagName("textarea")[0].className;
        //alert($('textarea').hasClass("slds-button"));
        alert('hi');
      
       if ($(".cmtcont textarea" ).hasClass( "alertred")) {
           alert('hi');
           $(this).addClass('slds-button_commentsred');
       }
       
       component.set("v.popOpen", true);
        
         /*$('#cmtctrlID').click(function(e)
                        {
                            //getting height and width of the message box
                            var height = $('#cmtcontID').height();alert(height);
                            var width = $('#cmtcontID').width();
                            //calculating offset for displaying popup message
                            //var leftVal=e.pageX-(width/2)+"px";
                            var topVal=e.pageY-(height/2)+"px"; alert(topVal);
                            //show the popup message and hide with fading effect
                            $('#cmtcontID').css({right:"122%",top:topVal}).show(800);
                        });    */
   },
    popupClose: function(component, event, helper) {
      // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
      component.set("v.popOpen", false);
   },
    openModel: function(component, event, helper) {
      // for Display Model,set the "isOpen" attribute to "true"
      
      component.set("v.isOpen", true);
       
   },
 
   closeModel: function(component, event, helper) {
      // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
      component.set("v.isOpen", false);
   },
    topfield: function(component, event, helper) {      
        var cmpTarget = component.find('changeIt');
        $A.util.addClass(cmpTarget, 'topinput');
    },
     removeCSS: function(cmp, event) {
        var cmpTarget = cmp.find('changeIt');
        $A.util.removeClass(cmpTarget, 'topinput');
    },
    
    expinput: function(component, event, helper) {
        var uinput = component.find('uiinputID');
        $A.util.addClass(uinput, 'topinput');
    },
    expinputrm: function(component, event, helper) {
        var uinput = component.find('uiinputID');
        $A.util.removeClass(uinput, 'topinput');
    },
    click: function(component, event, helper) {
        component.set("v.icon",
                      component.get("v.icon")=="utility:chevrondown"?
                      "utility:chevronup":"utility:chevrondown");
    },
    asoutcome : function(component, event, helper) {
        helper.helperFun(component,event,'asoutcomecnt');
    },
    asoutcome1 : function(component, event, helper) {
        helper.helperFun(component,event,'asoutcomecnt1');
    },
    checkInput : function(component, event, helper) {
        var cellInput = helper.getInputCell(component, event); 
        
		helper.beforeCheckInput(component, event);
        helper.customCheckInput(cellInput, component, event);
        helper.afterCheckInput(component, event);
    },
   
})