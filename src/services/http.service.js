
const TOKEN = '5cbce175d45037d379e125dd7a65104063e8b7a5'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:8000/'

export const httpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'GET', data = null) {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            method,
            headers: {
                'Authorization': `Token ${TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            params: (method === 'GET') ? data : null,

        }).then(res => res.json())
        return res
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        console.dir(err)
        if (err.response && err.response.status === 401) {
            sessionStorage.clear();
            window.location.assign('/')
        }
        throw err
    }
}