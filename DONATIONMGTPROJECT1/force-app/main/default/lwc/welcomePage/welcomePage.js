import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class WelcomePage extends NavigationMixin(LightningElement) {


    // Navigate to the Donor Registration page
    handleDonorSelection() {
        let cmpDef={
            componentDef:"c:donorAccountCreation"
    
           };
           let encodeDef=btoa(JSON.stringify(cmpDef));
           this[NavigationMixin.Navigate]
           ({
            type:"standard__webPage",
            attributes:{
                url:"one/one.app#"+encodeDef
            }
           });
    }

    // Navigate to the Shelter Home Registration page
    handleShelterHomeSelection() {
        let cmpDef={
            componentDef:"c:shelterHomeCreation"
    
           };
           let encodeDef=btoa(JSON.stringify(cmpDef));
           this[NavigationMixin.Navigate]
           ({
            type:"standard__webPage",
            attributes:{
                url:"one/one.app#"+encodeDef
            }
           });
    }
}
// import { LightningElement } from 'lwc';
// import { NavigationMixin } from 'lightning/navigation';

// export default class WelcomePage extends NavigationMixin(LightningElement) {

//     // Navigate to the Donor Registration page
//     handleDonorSelection() {
//         // Use 'standard__component' to directly navigate to the LWC component
//         this[NavigationMixin.Navigate]({
//             type: 'standard__component',
//             attributes: {
//                 componentName: 'c__donorAccountCreation'  // Correctly formatted component name
//             }
//         });
//     }

//     // Navigate to the Shelter Home Registration page
//     handleShelterHomeSelection() {
//         // Use 'standard__component' to directly navigate to the LWC component
//         this[NavigationMixin.Navigate]({
//             type: 'standard__component',
//             attributes: {
//                 componentName: 'c__shelterHomeCreation'  // Correctly formatted component name
//             }
//         });
//     }
// }
