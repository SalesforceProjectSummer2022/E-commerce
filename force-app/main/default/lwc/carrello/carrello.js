import { LightningElement,api } from 'lwc';
import{ NavigationMixin} from 'lightning/navigation';

export default class Carrello extends NavigationMixin(LightningElement) {

@api recordId

Indietro(){
    var defination = {
    
    componentDef:"c:lWC_E_Commerce1",
    attributes:  {
    
        recordId: '833307'
    }
    
    
    }
        this[NavigationMixin.Navigate]({
    
         type : "standard__webPage",
         attributes: {
             url:'/one/one.app#' + btoa(JSON.stringify(defination))
         }
    
        })
    }







}