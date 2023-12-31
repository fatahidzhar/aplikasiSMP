import  Axios  from "axios"

const axios = Axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true,
})

export default axios