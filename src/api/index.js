import axios from 'axios'

const HOST = '10.0.2.2'
const API = axios.create({
    baseURL: `http://${HOST}:5000/api/v1`
})

const setAuthHeaders = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

module.exports = {
    login: async (email, password) => {
        try {
            const response = await API.post('/authenticate', { email: email, password: password })
            console.log(response.data.token)
            setAuthHeaders(response.data.token)
            return response.data
            // Add error handling
        } catch (err) {
            throw new Error('Invalid credentials')
        }
    },

    getUser: async (token) => {
        // const config = {
        //     headers: { Authorization: `Bearer ${token}` }
        // }
        try {
            const response = await API.get('/me')
            console.log(response.data)
            // console.log(response)
            return response.data
            // Add error handling
        } catch (err) {
            throw new Error('User not found')
        }
    },

    getTasks: async (token) => {
        // const config = {
        //     headers: { Authorization: `Bearer ${token}` }
        // }
        try {
            const response = await API.get('/tasks')
            return response.data
            // Add error handling
        } catch (err) {
            console.log(err)
        }
    },

    createTask: async (name, clientId, token) => {
        // const config = {
        //     headers: { Authorization: `Bearer ${token}` }
        // }
        try {
            await API.post('/tasks', { name: name, clientId: clientId })
            return true
            // Add error handling
        } catch (err) {
            console.log(err)
            throw new Error('Failed to create task')
        }
    }
}