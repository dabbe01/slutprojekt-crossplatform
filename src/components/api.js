import axios from 'axios'

const HOST = '10.0.2.2'
const API = axios.create({
    baseURL: `http://${HOST}:5000/api/v1`
})
module.exports = {
    login: async (email, password) => {
        try {
            const response = await API.post('/authenticate', { email: email, password: password })
            return response.data
            // Add error handling
        } catch (err) {
            throw new Error('Invalid credentials')
        }
    },

    createTask: async (email, password) => {
        try {
            const response = await API.post('/authenticate', { email: email, password: password })
            if (response.status == 200) return response.data
            // Add error handling
        } catch (err) {
            console.log(err)
        }
    }
}