public class AccContOppCtrl {
    public Account a {get;set;}
    public Contact c {get;set;}
    public Opportunity op {get;set;}
    
    public List<Account> accDetails {get;set;}  
    public List<Contact> contDetails{get;set;}
    public List<Opportunity> oppDetails{get;set;}
    
    public AccContOppCtrl(){
        a = new Account();
        c = new Contact();
        op = new Opportunity();
    }
    
    public PageReference save() {        
        insert a; insert c; insert op; 
        //accDetails= [select Name,OwnerId,BillingAddress from Account where id=:a.id];        
        return null;
    }
}