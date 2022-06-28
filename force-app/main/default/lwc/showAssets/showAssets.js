import { LightningElement, track, wire } from 'lwc';
import getAssetsList from '@salesforce/apex/AssetUtility.getAssets';

export default class ShowAssets extends LightningElement {

    @wire(getAssetsList) assets;

}