import {Client, ID, Databases} from 'appwrite'
import { configur } from '../configur/configur';
class DatabaseService {
    client = new Client();
    database;
    constructor(){
        this.client
        .setEndpoint(configur.appwriteURL)
        .setProject(configur.appwrteProjectId);
        this.database = new Databases(this.client)
    }

    async createNotes({article_url, user_id, title, description, slug}){
        try {
            return await this.database.createDocument(
                configur.appwriteDatabaseId,
                configur.appwriteCollectionId,
                slug,
                {
                    article_url,
                    user_id,
                    title,
                    description
                }
            )
        } catch (error) {
            console.log("Create Notes Error", error);
            throw error;
        }
    }
    async updateNotes(slug,{article_url, user_id, title, description}){
        try {
            return await this.database.updateDocument(
                configur.appwriteDatabaseId,
                configur.appwriteCollectionId,
                slug,{
                    article_url,
                    user_id,
                    title,
                    description
                }
            )
        } catch (error) {
            console.log("Update Notes Error", error);
            throw error;
        }
    }
    async getNotes(slug){
        try {
            return this.database.getDocument(
                configur.appwriteDatabaseId,
                configur.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Get Notes error", error);
            throw error;
        }
    }

    async deleteNotes(slug){
        try {
            return await this.database.deleteDocument(
                configur.appwriteDatabaseId,
                configur.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Delete Notes error", error);
            throw error;
        }
    }
}

const databaseService = new DatabaseService();

export default databaseService;