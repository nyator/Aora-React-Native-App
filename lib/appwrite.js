import { Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.nehtek.aora",
  projectId: "664a5e02000a707d9128",
  databaseOd: "664a65350002b5bfdf73",
  userCollectionId: "664a67a7000c8dde01c8",
  videoCollectionID: "664a686300214723d79e",
  storageId: "66a3c377001094da454a",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
