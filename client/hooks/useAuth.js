import { useContext } from "react"
import { login, register } from "../src/api/authApi"
import { AuthContext } from "../src/contexts/authContext"

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext)


    const loginHandler = async (email, passsword) => {

        const {passsword: _, ...authData} = await login(email, passsword)
        changeAuthState(authData)
        console.log(authData);
//consta gore moje i s result
        return authData
    }

    return loginHandler
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext)

    const registerHandler = async (email, password) => {
        const  {password: _, ...authData} = await register(email, password)

        changeAuthState(authData)

        return authData

        // const {passsword,...authData} = await register(email, password)

        // changeAuthState(authData)

        // return result
    }

    return registerHandler
}