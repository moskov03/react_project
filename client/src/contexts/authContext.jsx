import { createContext } from "react";
import usePersistedState from "../../hooks/usePersistedState";
import { useContext } from "react";

export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
    logout: () => null
})

export function AuthContextProvider(props) {

    const [authState, setAuthState] = usePersistedState('auth', {})

    const changeAuthState = (state) => {

        localStorage.setItem('accessToken', state.accessToken)

        setAuthState(state)
    }

    const logout = () => {
        localStorage.removeItem('accessToken')
        setAuthState(null)
    }

    const contextData = {
        userId: authState?._id,
        email: authState?.email,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>

    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
    const authData = useContext(AuthContext)

    return authData
}