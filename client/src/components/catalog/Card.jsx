import { Link } from 'react-router-dom'

export default function Card({ name, breed, age, imageUrl, _id }) {

    return (
        <>
            <div className="card">
                <img src={imageUrl} alt="Dog Image" />
                <div className="details">
                    <p>Name - {name}</p>
                    <p>Breed - {breed}</p>
                    <p>Age - {age}</p>
                    <button><Link to={`/catalog/${_id}/details`}>Details</Link></button>
                </div>
            </div>
        </>
    );

}