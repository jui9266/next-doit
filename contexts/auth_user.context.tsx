import React, { createContext, useContext } from 'react'
import { AuthUser } from '@/models/AuthUser'
import useFilrebaseAuth from '@/hooks/useFilrebaseAuth'

interface InAuthUserContext {
  authUser: AuthUser | null
  loading: boolean
  signInWithGoogle: () => void
  signOut: () => void
}

const AuthUserContext = createContext<InAuthUserContext>({
  authUser: null,
  loading: true,
  signInWithGoogle: async () => ({ user: null, credential: null }),
  signOut: () => {
    console.log('로그아웃')
  },
})

export const AuthUserProvider = function ({ children }: { children: React.ReactNode }) {
  const auth = useFilrebaseAuth()
  return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
}

export const useAuth = () => useContext(AuthUserContext)
