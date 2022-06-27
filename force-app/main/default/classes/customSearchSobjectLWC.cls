public with sharing class customSearchSobjectLWC {

    @AuraEnabled(cacheable=true)
    public static list<ProdottiDisponibili__c> getProdottiList(string searchKey) {
        string searchKeyword = '%' + searchKey + '%';
		
       // crea una lista di prodotti per salvare il risultato della ricerca
        list<ProdottiDisponibili__c> ProductListRecord = new list<ProdottiDisponibili__c>();
     
	   // query Prodotti records
        for(ProdottiDisponibili__c ProdObj : [Select id,name
                            From ProdottiDisponibili__c
                            WHERE name LIKE : searchKeyword]){
           ProductListRecord.add(ProdObj);
        }
        
         if(ProductListRecord.size() == 0){
            throw new AuraHandledException('Nessun prodotto trovato..'); 
         }
         
        return ProductListRecord;
    }
}
