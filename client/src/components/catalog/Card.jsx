export default function Card({ name, breed, age, imageUrl, _id }) {

    return (
        <>
            <div className="card">
                <img src={imageUrl} alt="Dog Image" />
                <div className="details">
                    <p>Name - {name}</p>
                    <p>Breed - {breed}</p>
                    <p>Age - {age}</p>
                    <button>Details</button>
                </div>
            </div>
        </>
    );

}