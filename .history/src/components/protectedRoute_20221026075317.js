import { useAuth } from "./context/AuthContext";

//manadzer przekierowań
export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth()
}