/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { UserAuth } from './context/AuthContext'
import { Navigate } from 'react-router-dom'
// manadzer przekierowań, chroniący przekierowania
export function ProtectedRoute ({ children }) {
  const { user, loading } = UserAuth()

  if (loading) return <h1>loading...</h1> // zmienić na komponent animacje logowania
  if (!user) return <Navigate to="/mainView" /> // jeśli uzytkownik nie istnieje to przejdz do widoku login
  if (user) return <Navigate to="/mainView" />
  return <>{children}</>
}
