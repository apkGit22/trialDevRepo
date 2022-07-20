({
    doinit : function(component, event, helper) {      
        var elements = document.querySelectorAll('.tab');
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('delivery_address_btn_active');
            elements[i].onclick = function (event) {
                console.log("ONCLICK");
                //remove all active class
                removeClass();
                if (event.target.innerHTML === this.innerHTML) {
                    this.classList.add("delivery_address_btn_active");
                }
            }
        }
        
        function removeClass(){
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove('delivery_address_btn_active');
            }
        }
    }
})