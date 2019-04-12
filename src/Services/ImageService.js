
// https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}/episode/{episode_number}/images?api_key=7c188ea0151bf48d93398941c14a172e
import { IMG_URI, IMG_CLIENT_ID } from '../config';

export default {
    async getShowImg(id) {

        let response = await fetch(IMG_URI + `/tv/${id}?api_key=${IMG_CLIENT_ID}&append_to_response=images`, {
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
}
