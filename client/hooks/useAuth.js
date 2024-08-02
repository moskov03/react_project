import { login } from "../src/api/authApi"

export const useLogin = () => {

    const loginHandler = async (email, passsword) => {


        const result = await login(email, passsword)

        //todo: update application state
        console.log(result);

    }

    return loginHandler
}