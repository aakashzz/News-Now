const configur = {
    appwriteURL: String(process.env.APPWRITE_ENDPOINT),
    appwrteProjectId: String(process.env.APPWRITE_PROJECT_ID),
    newsApiKey: String(process.env.NEXT_PUBLIC_NEWS_API_KEY),
    appwriteDatabaseId: String(process.env.APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(process.env.APPWRITE_COLLECTION_ID),
    gnewsApiKey: String(process.env.NEXT_PUBLIC_GNEWS_API_KEY)
}
export default configur