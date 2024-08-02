import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";

const initialValues = { email: '', password: '', rePassword: '' };

export default function Register() {
    const register = useRegister()
    const navigate = useNavigate()

    const registerHandler = async ({ email, password,rePassword }) => {
        if(password !== rePassword){
            alert('Password !== rePassword')
            return
        }

        try {
            await register(email, password)
            navigate('/')
        } catch (err) {
            console.log(err.message);
            alert(err.message)
        }
    }

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, registerHandler)

    return (
        <>
            <div className="register-box">
                <h1>Register</h1>
                <form method="POST" onSubmit={submitHandler}>
                    {/* <label>Username</label>
                    <input type="text" name="username" placeholder="Username.." /> */}
                    <label>Email</label>
                    <input type="text"
                        name="email"
                        placeholder="Email.."
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <label>Password</label>
                    <input type="password"
                        name="password"
                        placeholder="Password.."
                        value={values.password}
                        onChange={changeHandler}
                    />

                    <label>Confirm Password</label>
                    <input type="password"
                        name="rePassword"
                        placeholder="Confirm Password.."
                        value={values.rePassword}
                        onChange={changeHandler}
                    />

                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </>
    );
}