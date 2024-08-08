import { Navigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/authContext"

export default function Logout() {

    const { logout } = useAuthContext()

    logout()

    return <Navigate to='/' />
}