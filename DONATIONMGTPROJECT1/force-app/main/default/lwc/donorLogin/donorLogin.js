// import { LightningElement } from 'lwc';
// import validateCredentials from '@salesforce/apex/donorController.validateCredentials';
// import { NavigationMixin } from 'lightning/navigation';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// export default class DonorLogin extends NavigationMixin(LightningElement) {
//     username = '';
//     password = '';

//     handleUsernameChange(event) {
//         this.username = event.target.value;
//     }

//     handlePasswordChange(event) {
//         this.password = event.target.value;
//     }

//     // handleLogin() 
//     // {
//     //     // Ensure both username and password are entered
//     //     if (!this.username || !this.password) {
//     //         this.showToast('Error', 'Please enter both Username and Password.', 'error');
//     //         return;
//     //     }

//     //     // Call Apex method to validate credentials
//     //     validateCredentials({ username: this.username, password: this.password })
//     //         .then(result => {
//     //             if (result) {
//     //                 this.showToast('Success', 'Login Successful! Welcome.', 'success');
//     //                 this.navigateToShelterHomeCreation();
//     //             } else {
//     //                 this.showToast('Error', 'Invalid Username or Password.', 'error');
//     //             }
//     //         })
//     //         .catch(error => {
//     //             console.error('Error validating credentials: ', error);
//     //             this.showToast('Error', 'An error occurred during login.', 'error');
//     //         });
            
//     //         let cmpDef = {
//     //             componentDef: 'c:pledgeCreation'
//     //         };
//     //         let encodeDef = btoa(JSON.stringify(cmpDef));
//     //         this[NavigationMixin.Navigate]({
//     //             type: 'standard__webPage',
//     //             attributes: {
//     //                 url: '/one/one.app#' + encodeDef
//     //             }
//     //         });
//     // }
//     handleLogin() {
//         // Ensure both username and password are entered
//         if (!this.username || !this.password) {
//             this.showToast('Error', 'Please enter both Username and Password.', 'error');
//             return;
//         }
    
//         // Call Apex method to validate credentials
//         validateCredentials({ username: this.username, password: this.password })
//             .then(result => {
//                 if (result) {
//                     this.showToast('Success', 'Login Successful! Welcome.', 'success');
    
//                     // Navigate to the Lightning page with the pledgeCreation component
//                     this[NavigationMixin.Navigate]({
//                         type: 'standard__navItemPage',
//                         attributes: {
//                             apiName: 'Pledge_Creation_Page'  // Use the API name of the Lightning page
//                         }
//                     });
//                 } else {
//                     this.showToast('Error', 'Invalid Username or Password.', 'error');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error validating credentials: ', error);
//                 this.showToast('Error', 'An error occurred during login.', 'error');
//             });
//     }
    

//     // Helper method to show toast notifications
//     showToast(title, message, variant) {
//         const event = new ShowToastEvent({
//             title: title,
//             message: message,
//             variant: variant
//         });
//         this.dispatchEvent(event);
//     }

//     // Method to navigate to the shelterHomeCreation component or page
//     navigateToShelterHomeCreation() {
//         this[NavigationMixin.Navigate]({
//             type: 'standard__component',
//             attributes: {
//                 componentName: 'c__shelterHomeCreation'
//             }
//         });
//     }
// }
import { LightningElement } from 'lwc';
import validateCredentials from '@salesforce/apex/donorController.validateCredentials';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DonorLogin extends LightningElement {
    username = '';
    password = '';
    showLogin = true;  // Controls whether to show login form
    showPledgeCreation = false;  // Controls whether to show pledgeCreation component

    handleUsernameChange(event) {
        this.username = event.target.value;
    }

    handlePasswordChange(event) {
        this.password = event.target.value;
    }

    handleLogin() {
        // Ensure both username and password are entered
        if (!this.username || !this.password) {
            this.showToast('Error', 'Please enter both Username and Password.', 'error');
            return;
        }

        // Call Apex method to validate credentials
        validateCredentials({ username: this.username, password: this.password })
            .then(result => {
                if (result) {
                    this.showToast('Success', 'Login Successful! Welcome.', 'success');

                    // Hide login form and show pledgeCreation component
                    this.showLogin = false;
                    this.showPledgeCreation = true;
                } else {
                    this.showToast('Error', 'Invalid Username or Password.', 'error');
                }
            })
            .catch(error => {
                console.error('Error validating credentials: ', error);
                this.showToast('Error', 'An error occurred during login.', 'error');
            });
    }

    // Helper method to show toast notifications
    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }
}
