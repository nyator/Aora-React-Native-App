import { Client, Account, ID, Databases, Avatars } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.nehtek.aora",
  projectId: "664a5e02000a707d9128",
  databaseId: "664a65350002b5bfdf73",
  userCollectionId: "664a67a7000c8dde01c8",
  videoCollectionId: "664a686300214723d79e",
  storageId: "66a3c377001094da454a",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(Client);

export const createUser = async (email, password, username) => {
  // Register User
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

//LogIn User
export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
    
    return session;
  } catch (error) {
    throw new Error(error);
  }
}
