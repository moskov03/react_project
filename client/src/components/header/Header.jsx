// import { useContext } from 'react';
import { Link } from 'react-router-dom'
// import { AuthContext } from '../../contexts/authContext';
import withAuth from '../../HOC/withAuth';



// eslint-disable-next-line react-refresh/only-export-components
function Header({
    // eslint-disable-next-line react/prop-types
    auth,
}) {
    // const { isAuthenticated } = useContext(AuthContext)
    // eslint-disable-next-line react/prop-types
    const { isAuthenticated } = auth

    return (
        <>
            <header>
                <div className="nav-box">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li><Link to="/search">Search</Link></li>
                        {isAuthenticated ? (<ul className='user'>
                            <li><Link to="/postDog">Create</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
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

// eslint-disable-next-line react-refresh/only-export-components
export default withAuth(Header)



//ne e zaduljitelno no e hubavo da se znae kakvo pravi HOC