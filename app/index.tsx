import { useEffect, useState } from 'react';
import { onIdTokenChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { Redirect, useRootNavigationState } from 'expo-router';

export default function Index() {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const nav = useRootNavigationState();

  useEffect(() => {
    let unsub = () => {};
    (async () => {
      // wait for initial auth state (prevents “first login stays on /login”)
      if (typeof FIREBASE_AUTH.authStateReady === 'function') {
        await FIREBASE_AUTH.authStateReady();
      }
      setUser(FIREBASE_AUTH.currentUser); // whatever it is right now

      // then subscribe to changes (login/logout/token refresh)
      unsub = onIdTokenChanged(FIREBASE_AUTH, (u) => setUser(u));
      setReady(true);
    })();

    return () => unsub();
  }, []);

  if (!nav?.key || !ready) return null; // or splash

  return <Redirect href={user ? '/(tabs)/home' : '/login'} />;
}