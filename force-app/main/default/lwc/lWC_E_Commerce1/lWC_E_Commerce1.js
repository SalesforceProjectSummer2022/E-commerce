import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAssetsList from '@salesforce/apex/AssetUtility.getAssets';

export class ButtonMenuMenuItems extends LightningElement { }
export default class LWC_E_Commerce1 extends NavigationMixin(LightningElement) {

    @wire(getAssetsList) assets;

    Carrello() {
        var defination = {

            componentDef: "c:carrello",
            attributes: {

                recordId: '833303'
            }


        }
        this[NavigationMixin.Navigate]({

            type: "standard__webPage",
            attributes: {
                url: '/one/one.app#' + btoa(JSON.stringify(defination))
            }

        })
    }

    Cellulari() {
        var defination = {

            componentDef: "c:cellulari",
            attributes: {

                recordId: '833306'
            }


        }
        this[NavigationMixin.Navigate]({

            type: "standard__webPage",
            attributes: {
                url: '/one/one.app#' + btoa(JSON.stringify(defination))
            }

        })
    }





}
