public class ConDragandDropController{


      @AuraEnabled
       public static Contactwrap getContactwrap(String objName, String[] objFields) {

           String query = 'SELECT Id, ';
           for(String s:objFields){
               query += s+' ,';
           }
           query = query.removeEnd(',');
           query += ' FROM ' + objName;
           System.debug('qq  ' + query);

           return new Contactwrap(Database.query(query));
       }


       public class Contactwrap{
           @AuraEnabled
           List<sObject> records {get;set;}

           public Contactwrap(List<sObject> recs){
               this.records = recs;
           }
       }

}