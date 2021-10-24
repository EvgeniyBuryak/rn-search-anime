import axios from 'axios';

const getArrayAnime = async () => {

    try {        
        const requestApiAnime = axios.create({
            baseURL: 'https://kitsu.io/api/edge/anime',
            headers: { 'content-type': 'application/vnd.api+json' },
        });

        const response = await requestApiAnime.get('?page[limit]=5');
        return response.data.data;

    } catch (error) {
        throw new ('Ошибка');
    }
};

export { getArrayAnime };