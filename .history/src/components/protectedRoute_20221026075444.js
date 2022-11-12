import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
//manadzer przekierowań
export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (!user) return <Navigate to={ }
}