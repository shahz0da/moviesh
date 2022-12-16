import { API_Key, client } from './getData'

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

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