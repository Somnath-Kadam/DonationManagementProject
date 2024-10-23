// public with sharing class donorController {
//     public donorController() {

//     }
 

//     @AuraEnabled(cacheable=true)
//     public static Boolean validateCredentials(String username, String password) {
//         // Default result to false
//         boolean result = false;

//         // Null or empty checks for username and password
//         if (String.isBlank(username) || String.isBlank(password)) {
//             return false;
//         }

//         // Query the Donor__c object to find the record with the matching username
//         List<Donor__c> listDonor = [
//             SELECT Id,UserId__c,Password__c
//             FROM Donor__c
//             WHERE UserId__c = :username
//             LIMIT 1
//         ];

//         // If a record is found, compare the password
//         if (!listDonor.isEmpty()) {
//             Donor__c customer = listDonor[0];

//             // Check if the password matches (consider case-sensitivity)
//             if (customer.Password__c == password) {
//                 result = true;
//             }
//         }

//         return result;
//     }
// }
public with sharing class donorController { 
    public donorController() {}

    @AuraEnabled(cacheable=true)
    public static Boolean validateCredentials(String username, String password) {
        // Null or empty checks for username and password
        if (String.isBlank(username) || String.isBlank(password)) {
            return false;
        }

        try {
            // Query the Donor__c object to find the record with the matching username
            List<Donor__c> listDonor = [
                SELECT Id, UserId__c, Password__c
                FROM Donor__c
                WHERE UserId__c = :username
                LIMIT 1
            ];

            // If a record is found, compare the password
            if (!listDonor.isEmpty()) {
                Donor__c customer = listDonor[0];

                // Case-sensitive password comparison; change to equalsIgnoreCase if needed
                return customer.Password__c != null && customer.Password__c == password;
            }
        } catch (Exception e) {
            // Log error if necessary
            System.debug('Error in validateCredentials: ' + e.getMessage());
            return false;
        }

        return false; // If no match is found, return false
    }
}
