async function requester(method, url, data) {
    const options = {};

    const accessToken = localStorage.getItem('accessToken')
    console.log(accessToken);

    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken,
        }
    }

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        }

        options.body = JSON.stringify(data)
    }
    try {
        const response = await fetch(url, options)
        console.log(response);
        
        if (response.status === 204) {
            return;
        }

        const result = await response.json()

        if (!response.ok) {
            console.log(response);
            throw result
        }

        return result
    } catch (error) {
        console.error('Error in requester:', error);
        throw error;
    }
}

export const get = requester.bind(null, 'GET')
export const post = requester.bind(null, 'POST')
export const put = requester.bind(null, 'PUT')
export const del = requester.bind(null, 'DELETE')

export default {
    get,
    post,
    put,
    del,
}