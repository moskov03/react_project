import { useContext } from "react"
import { login, register } from "../src/api/authApi"
import { AuthContext } from "../src/contexts/authContext"

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext)


    const loginHandler = async (email, passsword) => {

        const result = await login(email, passsword)
        changeAuthState(result)
        console.log(result);

        return result
    }

    return loginHandler
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext)

    const registerHandler = async (email, password) => {
        const {result} = await register(email, password)

        changeAuthState(result)

        return result

        // const {passsword,...authData} = await register(email, password)

        // changeAuthState(authData)

        // return result
    }

    return registerHandler
}