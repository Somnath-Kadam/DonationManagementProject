// import { LightningElement } from 'lwc';
// import validateCredentials from '@salesforce/apex/shelterController.validateCredentials';
// import { NavigationMixin } from 'lightning/navigation';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// export default class ShleterLogin extends LightningElement {
//     username = '';
//     password = '';

//     handleUsernameChange(event) {
//         this.username = event.target.value;
//     }

//     handlePasswordChange(event) {
//         this.password = event.target.value;
//     }

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
//                     this.navigateToShelterHomeCreation();
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
import validateCredentials from '@salesforce/apex/shelterController.validateCredentials';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShelterLogin extends LightningElement {
    username = '';
    password = '';
    showLogin = true;  // Controls whether to show login form
    showRequestCreation = false;  // Controls whether to show requestCreation component

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

                    // Hide login form and show requestCreation component
                    this.showLogin = false;
                    this.showRequestCreation = true;
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
