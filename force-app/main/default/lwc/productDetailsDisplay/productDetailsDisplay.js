import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAssetsList from '@salesforce/apex/AssetUtility.getAssets';

/**
 * An organized display of product information.
 *
 * @fires ProductDetailsDisplay#addtocart
 * @fires ProductDetailsDisplay#createandaddtolist
 */
export default class ProductDetailsDisplay extends NavigationMixin(
    LightningElement
) {

    async retrieveAssetsFromClass() {
        return await getAssetsList;
    }

    getDisplayableFields() {
        
    }

}
