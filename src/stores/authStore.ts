import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import type { User, Subscription } from '@supabase/supabase-js'

interface Profile {
  id: string
  display_name: string
  avatar_url: string | null
}

interface AuthStore {
  user: User | null
  profile: Profile | null
  loading: boolean
  error: string | null

  initialize: () => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, displayName: string) => Promise<void>
  signOut: () => Promise<void>
  clearError: () => void
}

// Module-level ref to prevent stacking listeners on re-renders
let authSubscription: Subscription | null = null

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  profile: null,
  loading: true,
  error: null,

  initialize: async () => {
    try {
      // Clean up any existing auth listener before creating a new one
      if (authSubscription) {
        authSubscription.unsubscribe()
        authSubscription = null
      }

      const { data: { session }, error: sessionError } = await supabase.auth.getSession()
      if (sessionError) {
        console.error('Failed to get session:', sessionError)
        set({ loading: false })
        return
      }

      if (session?.user) {
        const profile = await fetchProfile(session.user.id)
        set({ user: session.user, profile, loading: false })
      } else {
        set({ loading: false })
      }

      // Listen for auth changes — store subscription to prevent leaks
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'TOKEN_REFRESHED') {
          // Token was refreshed successfully — update user reference
          if (session?.user) {
            set({ user: session.user })
          }
          return
        }

        if (event === 'SIGNED_OUT') {
          set({ user: null, profile: null })
          return
        }

        if (session?.user) {
          // Wrap in try/catch so profile failure doesn't null a valid user
          let profile: Profile | null = null
          try {
            profile = await fetchProfile(session.user.id)
          } catch (err) {
            console.error('Failed to fetch profile on auth change:', err)
          }
          set({ user: session.user, profile })
        } else {
          set({ user: null, profile: null })
        }
      })
      authSubscription = subscription
    } catch (err) {
      console.error('Auth initialization failed:', err)
      set({ loading: false })
    }
  },

  signIn: async (email, password) => {
    set({ error: null })
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      set({ error: error.message })
      throw error
    }
  },

  signUp: async (email, password, displayName) => {
    set({ error: null })
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName } }
    })
    if (error) {
      set({ error: error.message })
      throw error
    }
  },

  signOut: async () => {
    await supabase.auth.signOut()
    set({ user: null, profile: null })
  },

  clearError: () => set({ error: null })
}))

async function fetchProfile(userId: string): Promise<Profile | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    if (error) {
      console.error('Profile fetch error:', error)
      return null
    }
    return data as Profile | null
  } catch (err) {
    console.error('Profile fetch exception:', err)
    return null
  }
}
