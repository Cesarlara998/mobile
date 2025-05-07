import { Account, Client } from 'react-native-appwrite';


let client: Client;
let account: Account;
client = new Client();
client
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('681933cb0039a63873b7')   // Your Project ID
  .setPlatform('com.r998.gymapp');   // Your package name / bundle identifier
  account = new Account(client);
export { account, client };

