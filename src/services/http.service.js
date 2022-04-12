
const TOKEN = 'c112c22ebd6500f20bf91f0c992f56667071a540'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '//myall-backend.herokuapp.com/'
    : '//localhost:8000/'
// : '//localhost:8000/'

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
        console.log('%c  `url`:', 'color: white;background: red;', `${BASE_URL}${endpoint}`);
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            method,
            // mode: 'cors',
            headers: {
                'Authorization': `Token ${TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: (method === 'GET') ? null : JSON.stringify(data),
            params: (method === 'GET') ? data : null,

        }).then(res => res.json())
        return res
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        console.dir(err)
        if (err.response && (err.response.status === 400 || err.response.status === 401)) {
            sessionStorage.clear();
            window.location.assign('/auth')
        }
        throw err
    }
}