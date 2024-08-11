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

//oooooooooooooooooooooooooo 
export function useGetOneDogs() {
    useEffect(() => {
        (async () => {
            const result = await dogsAPI.getOne(dogId)

            setDog(result)
        })()
    }, [])
}
//ooooooooooooooooooooooooooooooo

export function useCreateDog() {
    const dogCreateHandler = async (dogData) => dogsAPI.create(dogData)

    return dogCreateHandler
}