({
    doInit:function(component, event, helper){
        var txt = document.getElementById('txtId');
        txt.addEventListener('keyup', myFunc);
        
        function myFunc(e) {
            var val = this.value;
            var re = /^([0-9]+[\.]?[0-9]?[0-9]?|[0-9]+)$/g;
            var re1 = /^([0-9]+[\.]?[0-9]?[0-9]?|[0-9]+)/g;
            if (re.test(val)) {
                //do something here
                
            } else {
                val = re1.exec(val);
                if (val) {
                    this.value = val[0];
                } else {
                    this.value = "";
                }
            }
        }
    },
    myFunction: function(component, event, helper) {      
        document.getElementById("myDropdown").classList.toggle("show");	
    },
    filterFunction: function(component, event, helper) {      
        var input, filter, ul, li, a;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        component.set('v.search','');
        var div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("li");
        for (var i = 0; i < a.length; i++) {
            if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }		
        }
    },
    slcteditem: function(component, event, helper) {      
        var target = event.target || event.srcElement;
        component.set('v.selected',event.target.innerText);
        
        /*
        document.getElementById("{!$Component.dropinput}").value = event.target.innerText;*/
        document.getElementById("myDropdown").classList.remove("show");
    }
})