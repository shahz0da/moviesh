import { API_Key, client } from './getData'

class getSearchData {

    getSearchMovies(searchValue) {
        let response = client.get(`search/movie?api_key=${API_Key}&query=${searchValue}`)
        .then(ress => {
            return ress
        })
        .catch(err => {
            return err
        })
        return response
    }
}

export default new getSearchData()


//  https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&query=spiderman&page=1
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=1