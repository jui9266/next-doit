import { useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { AuthUser } from '@/models/AuthUser'
import FirebaseClient from '@/models/firebase_client'

export default function useFilrebaseAuth() {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  async function signInWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider()
    try {
      const signInResult = await signInWithPopup(FirebaseClient.getInstance().Auth, provider)
      if (signInResult.user) {
        console.log(signInResult.user)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const clear = () => {
    setAuthUser(null)
    setLoading(true)
  }
  const signOut = () => FirebaseClient.getInstance().Auth.signOut().then(clear)

  const authStateChanged = async (authState: User | null) => {
    if (authState === null) {
      setAuthUser(null)
      setLoading(false)
      return
    }
    setLoading(true)
    setAuthUser({
      uid: authState.uid,
      email: authState.email,
      displayName: authState.displayName,
      photoURL: authState.photoURL,
    })
    setLoading(false)
  }

  useEffect(() => {
    const unsubscribe = FirebaseClient.getInstance().Auth.onAuthStateChanged(authStateChanged)
    return () => {
      unsubscribe()
    }
  }, [])

  return {
    authUser,
    loading,
    signInWithGoogle,
    signOut,
  }
}
