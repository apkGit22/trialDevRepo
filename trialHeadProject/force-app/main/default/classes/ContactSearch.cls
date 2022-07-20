public class ContactSearch {
    public static Contact[] searchForContacts(String lastName, String postCode){
        Contact[] cts = [SELECT Contact.ID,Contact.Name FROM Contact 
                 WHERE LastName = :lastName AND MailingPostalCode= :postCode];
        return cts;
    }
}