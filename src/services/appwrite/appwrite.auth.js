import { Client, Account, ID } from "appwrite";
import { configur } from "../configur/configur";
class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(configur.appwriteURL)
      .setProject(configur.appwrteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userData = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userData) {
        console.log(userData);
        return this.login({ email, password });
      }
    } catch (error) {
      console.error("Create Account Error", error.message);
      throw error.message;
    }
  }

  async loginAccount({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("Login Account Error", error.message);
      throw error.message;
    }
  }

  async getCurrentAccount() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
      throw error.message;
    }
  }

  async logoutAccount(){
    try {
        return await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite Service :: Logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;