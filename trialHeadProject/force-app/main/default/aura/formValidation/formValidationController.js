({
    onClick : function(component, event, helper) {
    //Validating all input fields together by providing the same aureid 'field' 
        let isAllValid = component.find('field').reduce(function(isValidSoFar, inputCmp){
            //display the error messages
            inputCmp.reportValidity();
            //check if the validity condition are met or not.
            return isValidSoFar && inputCmp.checkValidity();
        },true);
    },
     
    onCustomValidationClick : function(component, event, helper) {
        //Explicitly checking the custom validation: 
        var phoneCmp = component.find('phone');
        var phoneCmpValue = phoneCmp.get("v.value");
        //Custom regular expression for phone number
        var phoneRegexFormat = /^\d{10}$/;
        //Check for regular expression match with the field value
        if(!phoneCmpValue.match(phoneRegexFormat)) {
           //set the custom error message
            phoneCmp.setCustomValidity("Enter valid phone number");
        }else{
           //reset the error message
            phoneCmp.setCustomValidity("");
        }
        //Group all the fields ids into a JS array
        var myIds = ["firstName","lastName","email","phone"];
       //reducer function iterates over the array and return false if any of the field is invalid otherwise true.
        let isAllValid = myIds.reduce(function(isValidSoFar, myId){
           //fetches the component details from the auraId
            var inputCmp = component.find(myId);
           //displays the error messages associated with field if any
            inputCmp.reportValidity();
           //form will be invalid if any of the field's valid property provides false value.
            return isValidSoFar && inputCmp.checkValidity();
        },true);
         
         
    }
})