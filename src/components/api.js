import axios from 'axios'

const HOST = '10.0.2.2'
const API = axios.create({
    baseURL: `http://${HOST}:5000/api/v1`
})

async function login(email, password) {
    try {
        const response = await API.post('/authenticate', { email: email, password: password })
        if (response.code === 200) return response.data
        // Add error handling
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    login
}