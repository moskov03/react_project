import { useEffect, useState } from "react";
import dogAPI from "../../api/dogsAPI";
import { useParams } from "react-router-dom";

export default function Details() {
    const [dog, setDog] = useState({})
    const { dogId } = useParams()

    useEffect(() => {
        const fetchDog = async () => {
            const result = await dogAPI.getOne(dogId);
            setDog(result);
        };

        fetchDog();
    }, [dogId]);


    const submitLikeHandler = (e) => {
        e.preventDefault()
        console.log('works');
    }

    return (
        <>
            <div className="details-container">
                <div className="details-container-image">
                    <img
                        src={dog.imageUrl} />
                </div>
                <div className="details-container-info">
                    <h2>Name: {dog.name}</h2>
                    <h3>Breed: {dog.breed}</h3>
                    <h3>Age: {dog.age}</h3>
                    <h3>Likes: 8</h3>
                </div>
                <div className="details-container-content">
                    <p>{dog.description}</p>
                </div>
                <div className="btn-container">
                    {/* <!-- Only for registered user and creator of the course--> */}
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                    {/* <!-- logged in user who has not yet sign up for the course--> */}
                    <a href="#" onClick={submitLikeHandler}>Like</a>
                    {/* <!-- logged in user who has already sign up for the course--> */}
                    <p className="sign-up">You`ve already liked this puppy</p>
                </div>
            </div>
        </>
    );
}