import registerRootComponent from 'expo/build/launch/registerRootComponent';

import App from './src/App';
import axios from 'axios'

registerRootComponent(App);

const HOST = '10.0.2.2'
const API = azios.create({
    baseUrl: `https://${HOST}:5000/api/v1`
})

export async function login() {
    const response = await API.post('/authenticate')
    if (response.code === 200) return response.data
}