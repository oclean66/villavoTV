import { API_URI, CLIENT_ID } from '../config';

export default {
    async getShowsList() {

        let response = await fetch(API_URI + '/shows/trending?limit=20', {
            method: "GET",
            headers: {
                "trakt-api-key": CLIENT_ID,
                "Content-Type": "application/json",
                "trakt-api-version":2
            },

        });
        if (response.status === 200) return await response.json();
        throw await response.json();
    }
}
