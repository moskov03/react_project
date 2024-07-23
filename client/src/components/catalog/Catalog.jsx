export default function Catalog() {
    return (
        <>
            <div className="catalog">

                <div className="card">
                    <img src="path-to-dog-image.jpg" alt="Dog Image" />
                    <div className="details">
                        <p>Name - Oscar</p>
                        <p>Breed - GSD</p>
                        <p>Age - 6</p>
                        <button>Details</button>
                    </div>
                </div>

                <div className="card">
                    <img src="path-to-dog-image.jpg" alt="Dog Image" />
                    <div className="details">
                        <p>Name - Oscar</p>
                        <p>Breed - GSD</p>
                        <p>Age - 6</p>
                        <button>Details</button>
                    </div>
                </div>
                
                <div className="card">
                    <img src="path-to-dog-image.jpg" alt="Dog Image" />
                    <div className="details">
                        <p>Name - Oscar</p>
                        <p>Breed - GSD</p>
                        <p>Age - 6</p>
                        <button>Details</button>
                    </div>
                </div>

                {/* <!-- Add more cards as needed --> */}
            </div>
        </>
    );
}