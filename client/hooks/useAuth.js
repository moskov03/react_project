import { useContext } from "react"
import { login } from "../src/api/authApi"
import { AuthContext } from "../src/contexts/authContext"

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext)


    const loginHandler = async (email, passsword) => {

        const result = await login(email, passsword)
        changeAuthState(result)
        console.log(result);

    }

    return loginHandler
}