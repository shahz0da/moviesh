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
