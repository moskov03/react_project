import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { useLogin } from "../../../hooks/useAuth";

export default function Login() {
    const login = useLogin()
    const navigate = useNavigate()

    const { values, changeHandler, submitHandler } = useForm(
        { email: '', password: '' },
        async ({ email, password }) => {
            try {
                await login(email, password)
                navigate('/')
            } catch (err) {
                console.log(err.message);
            }
        }
    )

    return (
        <>
            <div className="login-box">
                <h1>Login</h1>
                <form action="#" method="" onSubmit={submitHandler}>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        placeholder="Email.."
                        onChange={changeHandler}
                    />

                    <label>Password</label>
                    <input type="password"
                        name="password"
                        placeholder="Password.."
                        value={values.password}
                        onChange={changeHandler}
                    />

                    <input type="submit" value="Submit" />
                </form>
                <p>Not have an account? <Link to="/register">Register here</Link></p>
            </div>
        </>
    );
}