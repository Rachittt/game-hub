import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '40cb5cd8d0fa408e98e5bb3ed5b378cc'
    }
})