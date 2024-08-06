import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  // apiKey: "AIzaSyA3Z-VBHhSLcD0EN8y_VHNydwcardLE94k",
  // authDomain: "smsotplong29.firebaseapp.com",
  // projectId: "smsotplong29",
  // storageBucket: "smsotplong29.appspot.com",
  // messagingSenderId: "1014749047907",
  // appId: "1:1014749047907:web:83cf44f001c92b72991c56",
  // measurementId: "G-0YM23K8M72"

  // apiKey: "AIzaSyA3Z-VBHhSLcD0EN8y_VHNydwcardLE94k",
  // authDomain: "smsotplong29.firebaseapp.com",
  // projectId: "smsotplong29",
  // storageBucket: "smsotplong29.appspot.com",
  // messagingSenderId: "1014749047907",
  // appId: "1:1014749047907:web:013cd6f64de66f70991c56",
  // measurementId: "G-Z8NMYKGLQB"

  apiKey: "AIzaSyAMLk1-dj8g0qCqU3DkxLKHbrT0VhK5EeQ",
  authDomain: "e-food-9e6e3.firebaseapp.com",
  projectId: "e-food-9e6e3",
  storageBucket: "e-food-9e6e3.appspot.com",
  messagingSenderId: "410522356318",
  appId: "1:410522356318:web:1f962a90aabeb82a3dc2cf",
  measurementId: "G-X1LHXV0DK1"
  

  // apiKey: "AIzaSyAhazYU1yiDTviFyVhr_nygsqU51ikAvbE",
  // authDomain: "jobfind-a9d99.firebaseapp.com",
  // projectId: "jobfind-a9d99",
  // storageBucket: "jobfind-a9d99.appspot.com",
  // messagingSenderId: "226812056684",
  // appId: "1:226812056684:web:1df2a2e6fc4bca1cedb449",
  // measurementId: "G-5CYRYWP0EQ"

  
  // apiKey: "AIzaSyA3Z-VBHhSLcD0EN8y_VHNydwcardLE94k",
  // authDomain: "smsotplong29.firebaseapp.com",
  // projectId: "smsotplong29",
  // storageBucket: "smsotplong29.appspot.com",
  // messagingSenderId: "1014749047907",
  // appId: "1:1014749047907:web:42eaafb30c39275b991c56",
  // measurementId: "G-M8GHM9CV1F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;