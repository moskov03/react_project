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