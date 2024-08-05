//crud zaqvki tuk
import * as request from './requester'

const BASE_URL = 'http://localhost:3030/jsonstore/dogs'

export const getAll = async () => {
    const result = await request.get(BASE_URL)

    const dogs = Object.values(result)

    return dogs
}

export const getOne = (dogId) => request.get(`${BASE_URL}/${dogId}`)

export const create = (dogData) => request.post(`http://localhost:3030/data/dogs`, dogData)

const dogAPI = {
    getOne,
    getAll,
    create
}

export default dogAPI