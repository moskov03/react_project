import { useEffect, useState } from "react";
import dogAPI from "../../api/dogsAPI";
import { useParams } from "react-router-dom";
// import likesApi from "../../api/likesApi";
import { useAuthContext } from "../../contexts/authContext";
import { useGetOneDogs } from "../../../hooks/useDogs";


export default function Details() {
    const { dogId } = useParams()
    const [doge, setDog] = useGetOneDogs(dogId)
    
    // const [isLiked, setIsLiked] = useState(false);
    const  dog  = useGetOneDogs(dogId)
    const { userId } = useAuthContext()


    // useEffect(() => {
    //     const fetchDog = async () => {
    //         try {
    //             const result = await dogAPI.getOne(dogId);
    //             setDog(result);
    //         } catch (error) {
    //             console.error("Error fetching dog details:", error);
    //         }
    //     };

    //     fetchDog();
    // }, [dogId]);


    // const submitLikeHandler = async (e) => {
    //     e.preventDefault();

    //     try {
    //         // Send request to like the dog
    //         const updatedDog = await likesApi.like(dogId);
    //         setDog(updatedDog);
    //         const fetchDog = async () => {
    //             try {
    //                 const result = await dogAPI.getOne(dogId);
    //                 setDog(result);
    //             } catch (error) {
    //                 console.error("Error fetching dog details:", error);
    //             }
    //         };

    //         fetchDog();


    //         setIsLiked(true);
    //         console.log('Like action successful');
    //     } catch (error) {
    //         console.error('Failed to like the dog:', error);
    //     }
    // };

    if (!doge) {
        return <p>Loading...</p>
    }

    const isOwner = userId === doge._ownerId

    console.log(isOwner);
    console.log(userId);
    console.log(dog._ownerId);
    
    
    
    return (
        <>
            <div className="details-container">
                <div className="details-container-image">
                    <img
                        src={doge.imageUrl} />
                </div>
                <div className="details-container-info">
                    <h2>Name: {doge.name}</h2>
                    <h3>Breed: {doge.breed}</h3>
                    <h3>Age: {doge.age}</h3>
                    <h3>Likes: {doge.likes}</h3>
                </div>
                <div className="details-container-content">
                    <p>{doge.description}</p>
                </div>
                {isOwner && (<div className="btn-container">

                    <a href="#">Edit</a>
                    <a href="#">Delete</a>

                </div>)}


            </div>
        </>
    );
}



// {
//     isAuthenticated && !isLiked ? (
//         <a onClick={submitLikeHandler}>Like</a>
//     ) : (
//     <p className="sign-up">You`ve already liked this puppy</p>
// )
// }