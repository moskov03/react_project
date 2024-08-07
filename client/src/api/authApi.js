import requester from "./requester"

const BASE_URL = 'http://localhost:3030/users'


export const register = (email, password) => requester.post(`${BASE_URL}/register`, { email, password });