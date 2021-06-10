import axios from 'axios'

const HOST = '10.0.2.2'
const API = axios.create({
    baseUrl: `https://${HOST}:5000/api/v1`
})

async function login(email, password) {
    const response = await API.post('/authenticate', { email: email, password: password })
    if (response.code === 200) return response.data
    // Add error handling
}

module.exports = {
    login
}