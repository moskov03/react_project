export default function Login() {
    return (
        <>
            <div className="login-box">
                <h1>Login</h1>
                <form action="#" method="">
                    <label>Email</label>
                    <input type="text" name="" placeholder="Email.." />
                    <label>Password</label>
                    <input type="password" name="" placeholder="Password.." />
                    <input type="submit" value="Submit" />
                </form>
                <p>Not have an account? <a href="/register">Register here</a></p>
            </div>
        </>
    );
}