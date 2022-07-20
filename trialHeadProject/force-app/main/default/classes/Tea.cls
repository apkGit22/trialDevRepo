/*public class Tea{
    public static void orderTea(){
        Set<String> teaTypes = new Set <String>();
        teaTypes.add('Black');
        teaTypes.add('White');
        teaTypes.add('Herbal');
        system.debug(teaTypes);
    }
}*/

/*public class Tea{
   public static void orderTea(){
    Set<String> teaTypes = new Set <String>{'Black', 'White', 'Herbal'};
    system.debug(teaTypes);
    teaTypes.add('Green');
    teaTypes.add('Black');
    system.debug(teaTypes);
}
}*/

/*public class Tea{
    public static void orderTea(){
        Map <String, String> teaTypes = new Map <String, String>();
        teaTypes.put('Black', 'Earthy');
        teaTypes.put('White', 'Sweet');
        teaTypes.put('Herbal', 'Sweet');
        
        system.debug(teaTypes);
    
    }
}
*/
public class Tea{
public static String orderTea(){
    Map <String, String> teaTypes = new Map <String, String>();
    teaTypes.put('Black', 'Earthy');
    teaTypes.put('White', 'Sweet');
    teaTypes.put('Herbal', 'Sweet');
    String flavorProfile = teaTypes.get('Herbal');
    System.debug('The flavorProfile of Herbal is: ' + flavorProfile);
    return flavorProfile;
}
}