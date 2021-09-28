import axios from 'axios';

export default axios.create({
    baseUrl: 'https://kitsu.io/api/edge/anime',
});

// https://kitsu.io/api/edge/anime?filter[categories]=future
