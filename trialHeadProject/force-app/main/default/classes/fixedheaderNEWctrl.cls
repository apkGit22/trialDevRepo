public class fixedheaderNEWctrl {
@auraEnabled
    public static List<Account> findRecords(string  searchStr){
        List<Account> returnList=new List<Account>();
        
        string queryString = 'select id, name,type,industry from account ';
        if(searchStr!=null && searchStr!=''){
            searchStr = '%'+String.escapeSingleQuotes(searchStr)+'%';
            queryString = queryString + ' where name LIKE:searchStr';
        }
        queryString = queryString + ' LIMIT 100';
        returnList=database.query(queryString);
        return returnList;
}
}