import { API_Key, client } from './getData'

class getMovies {

    getMoviesByCategory(categoryName) {
        let response = client.get(`movie/${categoryName}?api_key=${API_Key}&language=en-US&page=1`)
        .then(ress => {
            return ress
        })
        .catch(err => {
            return err
        })
        return response
    }

    getMoviesDetail(id) {
        let response = client.get(`movie/${id}?api_key=${API_Key}&language=en-US&page=1`)
        .then(ress => {
            return ress
        })
        .catch(err => {
            return err
        })
        return response
    }
}

export default new getMovies()