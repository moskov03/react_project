import { useEffect, useState } from "react";
import dogAPI from "../../api/dogsAPI";
import { useParams } from "react-router-dom";
import likesApi from "../../api/likesApi";

export default function Details() {
    const [dog, setDog] = useState({})
    const { dogId } = useParams()
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const fetchDog = async () => {
            try {
                const result = await dogAPI.getOne(dogId);
                setDog(result);
            } catch (error) {
                console.error("Error fetching dog details:", error);
            }
        };

        fetchDog();
    }, [dogId]);


    const submitLikeHandler = async (e) => {
        e.preventDefault();

        try {
            // Send request to like the dog
            const updatedDog = await likesApi.like(dogId);
            setDog(updatedDog);
            setIsLiked(true);
            console.log('Like action successful');
        } catch (error) {
            console.error('Failed to like the dog:', error);
        }
    };

    if (!dog) {
        return <p>Loading...</p>
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
                    <h3>Likes: {dog.likes}</h3>
                </div>
                <div className="details-container-content">
                    <p>{dog.description}</p>
                </div>
                <div className="btn-container">
                    {/* <!-- Only for registered user and creator of the course--> */}
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                    {/* <!-- logged in user who has not yet sign up for the course--> */}
                    {!isLiked ? (
                        <a onClick={submitLikeHandler}>Like</a>
                    ) : (
                        <p className="sign-up">You`ve already liked this puppy</p>
                    )}

                    {/* <!-- logged in user who has already sign up for the course--> */}

                </div>
            </div>
        </>
    );
}