import {signOut} from 'firebase/auth'
import { FIREBASE_AUTH } from '../FirebaseConfig'

export function signOutFirebase() {
    return signOut(FIREBASE_AUTH);
}