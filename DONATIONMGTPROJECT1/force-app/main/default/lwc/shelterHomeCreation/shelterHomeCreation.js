import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class ShelterHomeCreation extends NavigationMixin(LightningElement) {

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Success",
            message: "Shelter Home Account created successfully!",
            variant: "success"
        });
        this.dispatchEvent(evt);

        // Navigate to shelterLogin component with btoa encoding
        let cmpDef = {
            componentDef: 'c:shleterLogin'  // Correct component name here
        };
        let encodeDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#' + encodeDef
            }
        });
    }

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

    handleLogin() {
        // Navigate to shelterLogin component when Sign In is clicked with btoa encoding
        let cmpDef = {
            componentDef: 'c:shleterLogin'  // Correct component name here
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
