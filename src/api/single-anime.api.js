import axios from 'axios';

const getSingleAnime = async (id) => {

    try {
        const requestSingleAnime = axios.create({
            baseURL: 'https://kitsu.io/api/edge/anime',
            headers: { 'content-type': 'application/vnd.api+json' },
            params: {
                'filter[id]': id,
            }
        });

        const response = await requestSingleAnime.get();
        return response.data.data;

    } catch (err) {
        throw new Error('Ошибка вызова конкретного анимэ');
    }
};

export { getSingleAnime };