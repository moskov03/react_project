import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setRepass] = useState("");

    // const regUser = async (e) => {
    //     e.preventDefault();
    //     if (password !== confirmpassword) {
    //         alert("Passwords do not match");
    //         return;
    //     }
    //     try {
    //         const response = await axios.post('http://localhost:5050/register', {
    //             username: username,
    //             email: email,
    //             password: password,
    //         });
    //         console.log(response.data); // Handle the response as needed
    //         // Optionally, redirect the user or show a success message
    //     } catch (error) {
    //         console.error("There was an error registering the user!", error);
    //     }
    // };

    return (
        <>
            <div className="register-box">
                <h1>Register</h1>
                <form method="POST">
                    <label>Username</label>
                    <input type="text" name="username" onChange={(e) => { setUsername(e.target.value) }} placeholder="Username.." />
                    <label>Email</label>
                    <input type="text" name="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email.." />
                    <label>Password</label>
                    <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password.." />
                    <label>Confirm Password</label>
                    <input type="password" name="repassword" onChange={(e) => { setRepass(e.target.value) }} placeholder="Confirm Password.." />
                    <input type="submit" onClick={regUser} value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </>
    );
}