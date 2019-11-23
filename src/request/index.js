import React from 'react';
import axios from 'axios';
const BASE_URL=process.env.REACT_APP_BACKEND_BASE_URL

export default axios.create({
    baseURL: 'http://localhost:8000'
})