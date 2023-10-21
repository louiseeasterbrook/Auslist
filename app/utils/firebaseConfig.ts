import {initializeApp} from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FIREBASE_API_KEY} from '@env';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';

//config imports
import remoteConfig from '@react-native-firebase/remote-config';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const initFirebaseConfig = async () => {
  await remoteConfig().setConfigSettings({minimumFetchIntervalMillis: 0});
  await remoteConfig()
    .setDefaults({})
    .then(() => remoteConfig().fetchAndActivate())
    // .then(fetchedRemotely => {
    //   if (fetchedRemotely) {
    //     console.log(
    //       '+++Configs were retrieved from the backend and activated.',
    //     );
    //     console.log(fetchedRemotely);
    //   } else {
    //     console.log(
    //       '---No configs were fetched from the backend, and the local configs were already activated',
    //     );
    //   }
    // }
    // );

  const parameters = remoteConfig().getAll();
  Object.entries(parameters).forEach($ => {
    const [key, entry] = $;
    console.log('--Key: ', key);
    console.log('--Source: ', entry.getSource());
    console.log('--Value: ', entry.asString());
    console.log('--------------------------------');
  });
};
