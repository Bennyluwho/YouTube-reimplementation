import * as functions from "firebase-functions/v1";
import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
import * as logger from "firebase-functions/logger";

initializeApp();

const firestore = getFirestore();

export const createUser = functions.auth.user().onCreate(async (user) => {
  logger.info("createUser triggered", {
    uid: user.uid,
    email: user.email,
  });

  const userInfo = {
    uid: user.uid,
    email: user.email ?? null,
    photoUrl: user.photoURL ?? null,
    createdAt: new Date().toISOString(),
  };

  try {
    await firestore.collection("users").doc(user.uid).set(userInfo);
    logger.info("User document created successfully", userInfo);
  } catch (error) {
    logger.error("Error writing user document to Firestore", error);
    throw error;
  }
});
