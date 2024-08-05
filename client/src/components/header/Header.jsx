import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext';

export default function Component() {
    const { isAuthenticated } = useContext(AuthContext)
    return (
        <>
            <header>
                <div className="nav-box">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        {isAuthenticated ? (<ul className='user'>
                            <li><Link to="/postDog">Create</Link></li>
                            <li><Link to="/">Logout</Link></li>
                        </ul>)
                            :
                            (<ul className='guest'><li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li></ul>)
                        }

                    </ul>
                </div>
            </header>
        </>
    );
}