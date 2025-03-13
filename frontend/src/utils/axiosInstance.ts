import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const register = async (username, email, password) => {
    return axios.post(`${API_URL}/signup`, {username, email, password});
}

export const login = async (email, password) => {
    return axios.post(`${API_URL}/login`, {email, password});
}

export const userinfo = async (token) => {
    return axios.get(`${API_URL}/api/userinfo`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}