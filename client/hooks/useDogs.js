import { useState, useEffect } from "react"
import dogsAPI from '../../client/src/api/dogsAPI'



export function useGetAllDogs() {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        dogsAPI.getAll()
            .then(result => setDogs(result))
    }, [])

    return [dogs, setDogs]
}


export function useGetOneDogs(dogId) {
    const [dog, setDog] = useState({})

    useEffect(() => {
        (async () => {
            const result = await dogsAPI.getOne(dogId)

            setDog(result)
        })()
    }, [])

    return [
        dog,
        setDog
    ]
}



export function useCreateDog() {
    const dogCreateHandler = async (dogData) => dogsAPI.create(dogData)

    return dogCreateHandler
}


// export function useDeleteDog(dogId) {
    
// }