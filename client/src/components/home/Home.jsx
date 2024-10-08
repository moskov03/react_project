import { Link } from "react-router-dom";

export default function Component() {
    return (
        <>
            <div className="content">
                <h1>Welcome to the Dog Adoption Center</h1>
                <p>Find your new best friend today! Our dog adoption center helps connect loving families with wonderful dogs in need of a home.</p>
                <Link to="/catalog" className="catalog">Find your puppy</Link>
            </div>
        </>
    );
}