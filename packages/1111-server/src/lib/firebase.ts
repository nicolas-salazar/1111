import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

if (getApps().length === 0) {
	// Reads GOOGLE_APPLICATION_CREDENTIALS env var automatically.
	// Set it to the path of your serviceAccountKey.json file.
	initializeApp({
		storageBucket: "onceonce-11413.firebasestorage.app",
	});
}

const databaseId = process.env.FIREBASE_DATABASE_ID;
export const db = databaseId ? getFirestore(getApp(), databaseId) : getFirestore();
export const storageBucket = getStorage().bucket();

