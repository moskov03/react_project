import { Link } from "react-router-dom";

export default function Register() {
    return (
        <>
            <div className="register-box">
                <h1>Register</h1>
                <form action="#" method="">
                    <label>Username</label>
                    <input type="text" name="" placeholder="Username.." />
                    <label>Email</label>
                    <input type="text" name="" placeholder="Email.." />
                    <label>Password</label>
                    <input type="password" name="" placeholder="Password.." />
                    <label>Confirm Password</label>
                    <input type="password" name="" placeholder="Confirm Password.." />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </>
    );
}