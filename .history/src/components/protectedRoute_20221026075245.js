import { useAuth } from "./context/AuthContext";

//manadzer przekierowań
export function ProtectedRoute({ children }) {
    useAuth()
}