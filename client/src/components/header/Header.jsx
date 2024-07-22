import { Link } from 'react-router-dom'

export default function Component() {
    return (
        <>
            <header>
                <div className="nav-box">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        
                        {/* <li><Link to="/create">Create</Link></li>
                        <li><Link to="">Profile</Link></li>
                        <li><Link to="">Logout</Link></li> */}
                    </ul>
                </div>
            </header>
        </>
    );
}