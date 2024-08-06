import { Client, Account, ID } from "appwrite";

class AuthService {
   client = new Client();
   account;
   constructor() {
      this.client
         .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
         .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
      this.account = new Account(this.client);
   }

   async OAuthCreateAccount() {
            try {
               return this.account.createOAuth2Session("google","http://localhost:3000/","http://localhost:3000/failed")
            } catch (error) {
               console.error("Create Account OAuth Error", error.message);
               throw error.message;
            }
         }
   async createAccount( {email, password, name} ) {
      try {
         const userAccount = await this.account.create(
            ID.unique(),
            email,
            password,
            name
         );
         if (userAccount) return this.login({ email, password });
          else {
            return userAccount;
         }
      } catch (error) {
        console.log("Appwrite serive :: createAccount :: error", error);
         throw error;
      }
   }
   async login({ email, password }) {
      try {
         return this.account.createEmailPasswordSession(email, password);
      } catch (error) {
        console.log("Appwrite serive :: login :: error", error);
        throw error;
      }
   }
   async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            throw error;
        }
   }
   async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
            throw error;
        }
   }
}

const authService = new AuthService();
export default authService;