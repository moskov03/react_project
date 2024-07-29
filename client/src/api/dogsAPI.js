//crud zaqvki tuk
import * as request from './requester'

const BASE_URL = 'http://localhost:3030/jsonstore/dogs'

export const getAll = async () => {
    const result = await request.get(BASE_URL)

    const dogs = Object.values(result)

    return dogs
}