public with sharing class AssetUtility {

    @AuraEnabled (cacheable=true)
    public static List <Asset> getAssets() {
        return [SELECT Id, Price, Description, Name FROM Asset];
    }

}
