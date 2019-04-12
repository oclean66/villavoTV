import { IMG_CLIENT_ID, IMG_URI,API_URI,CLIENT_ID } from '../config';

export default {
    async getShow(id) {

        let response = await fetch(IMG_URI + `/tv/${id}?api_key=${IMG_CLIENT_ID}&append_to_response=images&language=es-US`, {
            method: "GET",
            headers: {
                // "trakt-api-key": CLIENT_ID,
                "Content-Type": "application/json",
                // "trakt-api-version":2
            },

        });
        if (response.status === 200) return await response.json();
        throw await response.json();
    },
    async getSeason(id,sx) {

        let response = await fetch(IMG_URI + `/tv/${id}/season/${sx}?api_key=${IMG_CLIENT_ID}&append_to_response=images&language=es-US`, {
            method: "GET",
            headers: {
                // "trakt-api-key": CLIENT_ID,
                "Content-Type": "application/json",
                // "trakt-api-version":2
            },

        });
        if (response.status === 200) return await response.json();
        throw await response.json();
    },
    async getEpisode(id,sx,ey) {

        let response = await fetch(IMG_URI + `/tv/${id}/season/${sx}/episode/${ey}?api_key=${IMG_CLIENT_ID}&append_to_response=images&language=es-US`, {
            method: "GET",
            headers: {
                // "trakt-api-key": CLIENT_ID,
                "Content-Type": "application/json",
                // "trakt-api-version":2
            },

        });
        if (response.status === 200) return await response.json();
        // if (response.status === 429) this.getEpisode(id,sx,ey);
        throw await response.json();
    },
    async getUrls(id,sx,ey){
        let response = await fetch(API_URI + `/shows/${id}/seasons/${sx}/episodes/${ey}?extended=full`, {
            method: "GET",
            headers: {
                "trakt-api-key": CLIENT_ID,
                "Content-Type": "application/json",
                "trakt-api-version":2
            },

        });
        if (response.status === 200) return await response.json();
        // if (response.status === 429) this.getEpisode(id,sx,ey);
        throw await response.json();
    }
}
