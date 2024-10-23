public with sharing class shelterController {
    @AuraEnabled(cacheable=true)
    public static Boolean validateCredentials(String username, String password) {
        // Null or empty checks for username and password
        if (String.isBlank(username) || String.isBlank(password)) {
            return false;
        }

        try {
            // Query the Donor__c object to find the record with the matching username
            List<Shelter_Home__c> listShelter = [
                SELECT Id,UserId__c,Password__c
                FROM Shelter_Home__c
                WHERE UserId__c = :username
                LIMIT 1
            ];

            // If a record is found, compare the password
            if (!listShelter.isEmpty()) {
                Shelter_Home__c customer = listShelter[0];

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

