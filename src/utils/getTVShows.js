import { API_Key, client } from './getData'

class getTVShows {
    getTVShowsByCategory(categoryName) {
        let response = client.get(`tv/${categoryName}?api_key=${API_Key}&language=en-US&page=1`)
        .then(ress => {
            return ress
        })
        .catch(err => {
            return err
        })
        return response
    }

    getTVDetail(id) {
        let response = client.get(`tv/${id}?api_key=${API_Key}&language=en-US`)
        .then(ress => {
            return ress
        })
        .catch(err => {
            return err
        })
        return response
    }
}

export default new getTVShows()