import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUs3w3o3bCJyxhF6JHYBbCVKimW8JApXQ",
  authDomain: "healthmate-2174d.firebaseapp.com",
  projectId: "healthmate-2174d",
  storageBucket: "healthmate-2174d.appspot.com",
  messagingSenderId: "199954438432",
  appId: "1:199954438432:web:e58e1c0d15152393c95f45"
};

// Initialize Firebase only on the client to avoid SSR build-time crashes
let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;

const isClient = typeof window !== 'undefined';

if (isClient) {
  try {
    const existingApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
    app = existingApp;
    auth = getAuth(existingApp);
    db = getFirestore(existingApp);
    console.log('Firebase initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Firebase client SDK:', error);
  }
}

// Export with non-null assertions for consumer ergonomics in client components
// In server context these will be undefined, but server should never use them
export { app, auth, db };