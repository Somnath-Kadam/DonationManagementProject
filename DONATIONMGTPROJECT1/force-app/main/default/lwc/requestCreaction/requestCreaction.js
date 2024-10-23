import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class RequestCreaction extends NavigationMixin(LightningElement) {
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Request created successfully!',
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }

    handleCancel() {
        let cmpDef = {
            componentDef: 'c:shleterLogin'
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
