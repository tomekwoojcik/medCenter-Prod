import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
//manadzer przekierowań, chroniący przekierowania
export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) return <h1>loading...</h1>; // zmienić na komponent animacje logowania
    if (!user) return <Navigate to="/login" /> // jeśli uzytkownik nie istnieje to przejdz do widoku login

    return <>{children}</>;
}