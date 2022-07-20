public with sharing class ContactController {

    public Contact c { get; set; }

    public List<Contact> samepage { get; set; }
    public List<Contact> showcusttbl { get; set; }
    
    public ContactController(){
       c=new Contact();
       
    }

    public PageReference save() {
         
       insert c;  
      samepage= [select FirstName,LastName,Email,Birthdate,Phone from Contact where id=:c.id];
      
        return null;
    }
    
    public void show(){
        showcusttbl=[select FirstName,Email,Phone from Contact where CreatedDate = TODAY];
       // 
      // date d = system.today().addDays(-1);
       //showcusttbl=[select FirstName,Email,Phone from Contact where CreatedDate = :d];
        
    }


   }