import React, { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../api/client'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [access, setAccess] = useState(null)

  const login = async ({ email, password, role }) => {
    const { data } = await api.post('/auth/login', { email, password })
    setUser(data.user); setAccess(data.access)
    localStorage.setItem('access', data.access)
  }
  const register = async (payload) => {
    const { data } = await api.post('/auth/register', payload)
    setUser(data.user); setAccess(data.access)
    localStorage.setItem('access', data.access)
  }
  const logout = async () => {
    await api.post('/auth/logout')
    setUser(null); setAccess(null)
    localStorage.removeItem('access')
  }

  useEffect(() => {
    const ax = api
    ax.interceptors.request.use((config) => {
      const token = access || localStorage.getItem('access')
      if (token) config.headers.Authorization = `Bearer ${token}`
      return config
    })
  }, [access])

  return <AuthContext.Provider value={{ user, access, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('Auth missing')
  return ctx
}
