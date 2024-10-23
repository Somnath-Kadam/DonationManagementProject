// import { LightningElement } from 'lwc';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// import { NavigationMixin } from 'lightning/navigation';
// export default class PledgeCreation extends LightningElement {
//     handleSuccess(event) {
//         const evt = new ShowToastEvent({
//             title: 'Success',
//             message: 'Donor account created successfully!',
//             variant: 'success'
//         });
//         this.dispatchEvent(evt);

// }
// handleCancel() {
//     // Navigate to Welcome Page (replace 'welcomePage' with your component name or URL)
//     let cmpDef = {
//         componentDef: 'c:donorLogin'
//     };
//     let encodeDef = btoa(JSON.stringify(cmpDef));
//     this[NavigationMixin.Navigate]({
//         type: 'standard__webPage',
//         attributes: {
//             url: '/one/one.app#' + encodeDef
//         }
//     });
// }
// }
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class PledgeCreation extends NavigationMixin(LightningElement) {
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Pledge created successfully!',
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }

    handleCancel() {
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
