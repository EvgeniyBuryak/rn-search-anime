import axios from 'axios';

export default axios.create({
    baseURL: 'https://kitsu.io/api/edge/anime',
    headers: { 'content-type': 'application/vnd.api+json' },
});