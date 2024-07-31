export default function Details() {
    return (
        <>
            <div className="details-container">
                <div className="details-container-image">
                    <img
                        src="" />
                </div>
                <div className="details-container-info">
                    <h2>Name: Oscar</h2>
                    <h3>Breed: German shephard dog</h3>
                    <h3>Age: 6</h3>
                    <h3>Likes: 8</h3>
                </div>
                <div className="details-container-content">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Fuga ratione accusamus dignissimos doloribus obcaecati in
                        impedit at, eos, illum aut voluptatem doloremque mollitia
                        eum dolor, ipsum cum iste dolore? Nihil
                        exercitationem deleniti vitae quibusdam maxime atque
                        quas a sunt asperiores pariatur? Pariatur voluptates
                        nulla reiciendis sint maxime eveniet molestiae quam,
                        dignissimos perferendis dicta. Sapiente repellendus ex,
                        possimus voluptate hic optio.</p>
                </div>
                <div className="btn-container">
                    {/* <!-- Only for registered user and creator of the course--> */}
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                    {/* <!-- logged in user who has not yet sign up for the course--> */}
                    <a href="#">Like</a>
                    {/* <!-- logged in user who has already sign up for the course--> */}
                    <p className="sign-up">You`ve already liked this puppy</p>
                </div>
            </div>
        </>
    );
}