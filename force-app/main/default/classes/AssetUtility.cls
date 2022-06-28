public with sharing class AssetUtility {

    @AuraEnabled (cacheable=true)
    public static List <Asset> getAssets() {
        return [SELECT Id, Price, Description, Name FROM Asset];
    }

    @AuraEnabled (cacheable=true)
    public static List <Asset> getAssetsOfUser(Id accountId) {
        return [SELECT Id, Price, Description, Name FROM Asset WHERE AccountId = :accountId];
    }

}
