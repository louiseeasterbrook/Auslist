import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {useEffect, useState} from 'react';

const auth = getAuth();

export function useAuth() {
  const [user, setUser] = useState<any>(); //FIX

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
    return unsubscribeFromAuthStatusChanged;
  }, []);
}
