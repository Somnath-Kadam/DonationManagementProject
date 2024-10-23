
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class DonorAccountCreation extends NavigationMixin(LightningElement) {
    // Handle successful account creation
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Donor account created successfully!',
            variant: 'success'
        });
        this.dispatchEvent(evt);

        // Navigate to Donor Login page after account creation
        let cmpDef = {
            componentDef: 'c:donorLogin'
        };
        let encodeDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#' + encodeDef
            }
        });
    }

    // Handle cancel button click
    handleCancel() {
        // Navigate to Welcome Page (replace 'welcomePage' with your component name or URL)
        let cmpDef = {
            componentDef: 'c:welcomePage'
        };
        let encodeDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#' + encodeDef
            }
        });
    }
    handlelogin()
    {
        let cmpDef = {
            componentDef: 'c:donorLogin'
        };
        let encodeDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#' + encodeDef
            }
        });
    }
}

